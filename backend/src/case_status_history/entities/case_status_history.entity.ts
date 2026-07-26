import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CaseStatus } from '../enums/case_status_history.enum';
import { Report } from 'src/reports/entities/report.entity';
import { User } from 'src/users/entities/user.entity';

@Entity('case_status_history')
export class CaseStatusHistory {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('uuid')
  report_id!: string;

  @Column({ type: 'varchar'})
  status?: CaseStatus;

  @Column({ type: 'timestamp' })
  changed_at?: Date;

  @Column()
  changed_by?: number;

  @Column({
  type: 'uuid',
  nullable: true,
})
office_id?: string;

@ManyToOne(() => Report, report => report.statusHistory)
@JoinColumn({ name: 'report_id' })
report!: Report;


@ManyToOne(() => User)
@JoinColumn({ name: 'changed_by' })
changedBy!: User;

}