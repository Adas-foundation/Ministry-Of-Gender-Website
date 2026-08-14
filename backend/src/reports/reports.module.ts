// reports.module.ts
import { Module, forwardRef } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { Report } from './entities/report.entity';
import { District } from '../district/entities/district.entity';
import { User } from '../users/entities/user.entity';
import { NotificationsModule } from '../notifications/notifications.module'; 
import { CaseStatusHistoryModule } from '../case_status_history/case_status_history.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Report,
      District,
      User,
    ]),
       CaseStatusHistoryModule,
    
    forwardRef(() => NotificationsModule), 
  ],
  controllers: [ReportsController],
  providers: [ReportsService],
  exports: [ReportsService], 
})
export class ReportsModule {}
