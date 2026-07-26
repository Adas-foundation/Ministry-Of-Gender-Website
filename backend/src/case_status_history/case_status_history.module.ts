import { Module } from '@nestjs/common';
import { CaseStatusHistoryService } from './case_status_history.service';
import { CaseStatusHistoryController } from './case_status_history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaseStatusHistory } from './entities/case_status_history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CaseStatusHistory])],
  controllers: [CaseStatusHistoryController],
  providers: [CaseStatusHistoryService],
})
export class CaseStatusHistoryModule {}
