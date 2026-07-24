import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CaseStatusHistory } from './entities/case_status_history.entity';
import { CreateCaseStatusHistoryDto } from './dto/create-case_status_history.dto';

@Injectable()
export class CaseStatusHistoryService {
  constructor(
    @InjectRepository(CaseStatusHistory)
    private readonly caseStatusHistoryRepository: Repository<CaseStatusHistory>,
  ) {}

  async create(createCaseStatusHistoryDto: CreateCaseStatusHistoryDto) {
    const statusHistory = this.caseStatusHistoryRepository.create(
      createCaseStatusHistoryDto,
    );

    return this.caseStatusHistoryRepository.save(statusHistory);
  }

  async findAll() {
    return this.caseStatusHistoryRepository.find();
  }

  async findByReport(reportId: string){
return await this.caseStatusHistoryRepository.find({
   where : { report_id: reportId },
  order: { changed_at: 'DESC' },
});
}
}