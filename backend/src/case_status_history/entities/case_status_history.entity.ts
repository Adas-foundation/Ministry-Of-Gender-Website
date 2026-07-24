import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CaseStatus } from '../enums/case_status_history.enum';

@Entity('case_status_history')
export class CaseStatusHistory {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('uuid')
  report_id!: string;

  @Column({ type: 'varchar'})
  status!: CaseStatus;

  @Column({ type: 'timestamp' })
  changed_at?: Date;

  @Column()
  changed_by?: string;

  @Column({
  type: 'uuid',
  nullable: true,
})
office_id?: string;

}