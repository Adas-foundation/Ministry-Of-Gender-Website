import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { EmailService } from 'src/email/email.service';
import { NotificationChannel } from './enums/notification-channel.enum';
import { ReportsService } from '../reports/reports.service';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,

    private readonly emailService: EmailService,

    private readonly reportsService: ReportsService,
  ) {}

  async create(
    createNotificationDto: CreateNotificationDto,
  ): Promise<Notification> {
    const notification =
      this.notificationRepository.create(createNotificationDto);

    notification.sent_at = createNotificationDto.sent_at
      ? new Date(createNotificationDto.sent_at)
      : new Date();

    try {
      const report = await this.reportsService.findOne(
        createNotificationDto.report_id,
      );

      if (!report) {
        throw new NotFoundException(
          `Report with ID ${createNotificationDto.report_id} not found`,
        );
      }

      const user = report.assignedUser;

      if (!user || !user.email) {
        throw new Error(
          'Cannot send notification: No assigned user or email found.',
        );
      }

      switch (createNotificationDto.channel) {
        case NotificationChannel.EMAIL:
          await this.emailService.sendEmail(
            user.email,
            'Report Notification',
            `Reference Number: ${report.referenceNumber}\nStatus: ${createNotificationDto.status_word}`,
          );
          break;

        case NotificationChannel.SMS:
          console.log(
            `[SMS Simulation] Reference Number: ${report.referenceNumber} | Status: ${createNotificationDto.status_word}`,
          );
          break;

        case NotificationChannel.PUSH:
          console.log(
            `[Push Simulation] Reference Number: ${report.referenceNumber} | Status: ${createNotificationDto.status_word}`,
          );
          break;
      }
    } catch (error: any) {
      console.error(
        'Notification dispatch failed:',
        error.message,
      );

    }

    return await this.notificationRepository.save(notification);
  }

  async findNotificationsForUser(
    userId: number,
  ): Promise<Notification[]> {
    return await this.notificationRepository.find({
      relations: {
        report: true,
      },
      where: {
        report: {
          assignedUser: {
            id: userId,
          } as any,
        },
      },
      order: {
        sent_at: 'DESC',
      },
    });
  }

  async findAll() {
    return await this.notificationRepository.find();
  }

  async findOne(id: number) {
    return await this.notificationRepository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    updateNotificationDto: UpdateNotificationDto,
  ) {
    await this.notificationRepository.update(id, updateNotificationDto);

    return this.findOne(id);
  }

  async remove(id: number) {
    await this.notificationRepository.delete(id);

    return {
      message: 'Notification deleted successfully',
    };
  }

  async findByReport(reportId: string) {
    return await this.notificationRepository.find({
      where: {
        report_id: reportId,
      },
    });
  }
}