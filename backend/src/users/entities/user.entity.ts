import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { Report } from '../../reports/entities/report.entity';
import { Evidence } from 'src/evidence/entities/evidence.entity';
import { CaseStatusHistory } from 'src/case_status_history/entities/case_status_history.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column({ unique: true })
  email?: string;
  @Column()
  password?: string;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role?: Role;

  @OneToMany(() => Report, (report) => report.assignedUser)
  assignedReports?: Report[];

  @OneToMany(() => Evidence, evidence => evidence.uploadedBy)
  uploadedEvidence!: Evidence[];

  @OneToMany(
  () => CaseStatusHistory,
  statusHistory => statusHistory.changedBy
)
statusChanges!: CaseStatusHistory[];
}
