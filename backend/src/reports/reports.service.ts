import { Injectable, NotFoundException, Inject, forwardRef } from '@nestjs/common';

import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './entities/report.entity';
import { Repository } from 'typeorm';

import { District } from 'src/district/entities/district.entity';
import { User } from 'src/users/entities/user.entity';

import { randomBytes } from 'crypto';

import { NotificationsService } from '../notifications/notifications.service';
import { NotificationChannel } from '../notifications/enums/notification-channel.enum';

import { CaseStatusHistoryService } from '../case_status_history/case_status_history.service';
import { CaseStatus } from '../case_status_history/enums/case_status_history.enum';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private readonly reportsRepository: Repository<Report>,

    @InjectRepository(District)
    private readonly districtRepository: Repository<District>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @Inject(forwardRef(() => NotificationsService))
    private readonly notificationsService: NotificationsService,

    private readonly caseStatusHistoryService: CaseStatusHistoryService,
  ) {}

  private generateReferenceNumber(): string {
    return `REP-${randomBytes(5).toString('hex').toUpperCase()}`;
  }

  async create(createReportDto: CreateReportDto) {
    const district = await this.districtRepository.findOne({
      where: {
        id: createReportDto.districtId,
      },
    });

    if (!district) {
      throw new NotFoundException('District not found');
    }

    let assignedUser: User | null = null;

    if (createReportDto.assignedUserId !== undefined) {
      assignedUser = await this.userRepository.findOne({
        where: {
          id: createReportDto.assignedUserId,
        },
      });

      if (!assignedUser) {
        throw new NotFoundException('Assigned user not found');
      }
    }

    const report = this.reportsRepository.create({
      description: createReportDto.description,

      status: createReportDto.status ?? CaseStatus.SUBMITTED,

      referenceNumber: this.generateReferenceNumber(),

      district,

      ...(assignedUser && { assignedUser }),
    });

    const savedReport = await this.reportsRepository.save(report);

    const saved = Array.isArray(savedReport)
      ? savedReport[0]
      : savedReport;

    try {
      await this.caseStatusHistoryService.create({
        report_id: saved.id,
        status: saved.status as CaseStatus,
        changed_at: new Date(),
      });
    } catch (historyError: any) {
      console.error(
        'Failed to create initial case status history:',
        historyError.message,
      );
    }

    try {
      await this.notificationsService.create({
        report_id: saved.id,
        status_word: saved.status,
        channel: NotificationChannel.EMAIL,
      });
    } catch (notifError: any) {
      console.error(
        'Failed to trigger initial creation notification:',
        notifError.message,
      );
    }

    return savedReport;
  }

  async findAll() {
    return await this.reportsRepository.find({
      relations: {
        district: true,
        assignedUser: true,
      },
    });
  }

  async findByReference(referenceNumber: string) {
    const report = await this.reportsRepository.findOne({
      where: {
        referenceNumber,
      },
      relations: {
        district: true,
        assignedUser: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    return report;
  }

  async findOne(id: string) {
    const report = await this.reportsRepository.findOne({
      where: {
        id,
      },
      relations: {
        district: true,
        assignedUser: true,
      },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    return report;
  }

  async update(id: string, updateReportDto: UpdateReportDto) {
    const report = await this.findOne(id);

    const oldStatus = report.status;

    if (updateReportDto.description) {
      report.description = updateReportDto.description;
    }

    if (updateReportDto.status) {
      report.status = updateReportDto.status;
    }

    if (updateReportDto.districtId) {
      const district = await this.districtRepository.findOne({
        where: {
          id: updateReportDto.districtId,
        },
      });

      if (!district) {
        throw new NotFoundException('District not found');
      }

      report.district = district;
    }

    if (updateReportDto.assignedUserId) {
      const assignedUser = await this.userRepository.findOne({
        where: {
          id: updateReportDto.assignedUserId,
        },
      });

      if (!assignedUser) {
        throw new NotFoundException('Assigned user not found');
      }

      report.assignedUser = assignedUser;
    }

    const updatedReport = await this.reportsRepository.save(report);

    if (
      updateReportDto.status &&
      updateReportDto.status !== oldStatus
    ) {
      try {
        await this.caseStatusHistoryService.create({
          report_id: updatedReport.id,
          status: updateReportDto.status as CaseStatus,
          changed_at: new Date(),
        });
      } catch (historyError: any) {
        console.error(
          'Failed to create status history:',
          historyError.message,
        );
      }
    }

    if (
      updateReportDto.status &&
      updateReportDto.status !== oldStatus
    ) {
      try {
        await this.notificationsService.create({
          report_id: updatedReport.id,
          status_word: updatedReport.status,
          channel: NotificationChannel.EMAIL,
        });
      } catch (notifError: any) {
        console.error(
          'Failed to trigger update status notification:',
          notifError.message,
        );
      }
    }

    return updatedReport;
  }

  async remove(id: string) {
    const report = await this.findOne(id);

    return await this.reportsRepository.remove(report);
  }

  async getDashboardStats() {
    const totalCases = await this.reportsRepository.count();

    const submitted = await this.reportsRepository.count({
      where: {
        status: CaseStatus.SUBMITTED,
      },
    });

    const underReview = await this.reportsRepository.count({
      where: {
        status: CaseStatus.UNDER_REVIEW,
      },
    });

    const assigned = await this.reportsRepository.count({
      where: {
        status: CaseStatus.ASSIGNED,
      },
    });

    const resolved = await this.reportsRepository.count({
      where: {
        status: CaseStatus.RESOLVED,
      },
    });

    return {
      totalCases,
      submitted,
      underReview,
      assigned,
      resolved,
    };
  }
}