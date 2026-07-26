import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { NotificationChannel } from '../enums/notification-channel.enum';
import { Report } from 'src/reports/entities/report.entity';

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

   @ManyToOne(() => Report, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'report_id' })
  report!: Report;
}