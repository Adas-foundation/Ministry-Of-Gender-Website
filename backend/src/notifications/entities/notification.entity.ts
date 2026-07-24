import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { NotificationChannel } from '../enums/notification-channel.enum';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('uuid')
  report_id!: string;

  @Column({
    type: 'enum',
    enum: NotificationChannel,
  })
  channel?: NotificationChannel;

  @Column({type: 'varchar',})
  status_word?: string;

  @Column({type: 'timestamp',})
  sent_at?: Date;
}