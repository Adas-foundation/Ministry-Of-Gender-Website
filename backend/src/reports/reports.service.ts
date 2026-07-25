import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './entities/report.entity';
import { Repository } from 'typeorm';
import { District } from 'src/district/entities/district.entity';
import { User } from 'src/users/entities/user.entity';
import { randomBytes } from 'crypto';
@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report) private readonly reportsRepository: Repository<Report>,
    @InjectRepository(District) private readonly districtRepository: Repository<District>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ){}
  private generateReferenceNumber(): string{
    return `REP-${randomBytes(5).toString('hex').toUpperCase()}`;
  }
  async create(createReportDto: CreateReportDto) {
    const district=await this.districtRepository.findOne({
      where: { id: createReportDto.districtId},
    });
    if(!district){
      throw new NotFoundException('District not found');
    }
    const assignedUser=await this.userRepository.findOne({
      where: {id: createReportDto.assignedUserId},
    });
    if(!assignedUser){
      throw new NotFoundException('Assigned user not found');
    }
    const report=this.reportsRepository.create({
      description: createReportDto.description,
      status: createReportDto.status ?? 'SUBMITTED',
      referenceNumber: this.generateReferenceNumber(),
      district, assignedUser,
    });
    return await this.reportsRepository.save(report);
  }

  async findAll() {
    return await this.reportsRepository.find({relations: { district: true, assignedUser: true }});
  }

  async findOne(id: number) {
    const report= await this.reportsRepository.findOne({
      where: {id},
      relations: { district: true, assignedUser: true },
    });
    if(!report){
      throw new NotFoundException('Report not found');
    }
    return report;
  }

  async update(id: number, updateReportDto: UpdateReportDto) {
    const report=await this.findOne(id);
    if(updateReportDto.description){
      report.description=updateReportDto.description;
    }
    if(updateReportDto.status){
      report.status=updateReportDto.status;
    }
    if(updateReportDto.districtId){
      const district= await this.districtRepository.findOne({
        where: {id: updateReportDto.districtId},
      });
      if(!district){
        throw new NotFoundException('District not found');
      }
      report.district=district;
    }
    if(updateReportDto.assignedUserId){
      const assignedUser= await this.userRepository.findOne({
        where: {id: updateReportDto.assignedUserId},
      });
      if(!assignedUser){
        throw new NotFoundException('Assigned user not found');
      }
      report.assignedUser=assignedUser;
    }
    
    return await this.reportsRepository.save(report);
  }

  async remove(id: number) {
    const report= await this.findOne(id);
    return await this.reportsRepository.remove(report);
  }
}
