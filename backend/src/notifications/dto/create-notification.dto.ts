import { IsEnum, IsString, IsUUID, IsDateString } from 'class-validator';
import { NotificationChannel } from '../enums/notification-channel.enum';

export class CreateNotificationDto {
  @IsUUID()
  report_id!: string;

  @IsEnum(NotificationChannel)
  channel?: NotificationChannel;

  @IsString()
  status_word?: string;

  @IsDateString()
  sent_at?: string;
}