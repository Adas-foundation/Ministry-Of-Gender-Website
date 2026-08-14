import { Controller, Get, Post, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { CaseStatusHistoryService } from './case_status_history.service';
import { CreateCaseStatusHistoryDto } from './dto/create-case_status_history.dto';

@Controller('case-status-history')
export class CaseStatusHistoryController {
  constructor(
    private readonly caseStatusHistoryService: CaseStatusHistoryService,
  ) {}

  @Post()
  create(
    @Body() createCaseStatusHistoryDto: CreateCaseStatusHistoryDto,
  ) {
    return this.caseStatusHistoryService.create(
      createCaseStatusHistoryDto,
    );
  }

  @Get()
  findAll() {
    return this.caseStatusHistoryService.findAll();
  }

    @Get('report/:reportId')
  async findByReport(
    @Param('reportId', ParseUUIDPipe) reportId: string, 
  ) {
    return await this.caseStatusHistoryService.findByReport(reportId);
  }
}