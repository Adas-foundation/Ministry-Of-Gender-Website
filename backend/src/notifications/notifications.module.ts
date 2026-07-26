import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { Notification } from './entities/notification.entity';
import { EmailModule } from 'src/email/email.module';
import { ReportsModule } from '../reports/reports.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notification]),
    EmailModule, 
    
    forwardRef(() => ReportsModule), 
  ],
  controllers: [NotificationsController],
  
  providers: [NotificationsService], 
  
  exports: [NotificationsService], 
})
export class NotificationsModule {}
