import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,ManyToOne, JoinColumn  } from 'typeorm';
import { Report } from 'src/reports/entities/report.entity';
import { User } from 'src/users/entities/user.entity';
@Entity('evidence')
export class Evidence {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column('uuid')
 report_id!: string;

  @Column()
  file_path!: string;

  @CreateDateColumn()
  uploaded_at?: Date;

  @Column({ type: 'jsonb', nullable: true })
  chain_of_custody!: object;

  @ManyToOne(() => Report, report => report.evidence)
  @JoinColumn({ name: 'report_id' })
 report!: Report;

 @ManyToOne(() => User)
 @JoinColumn({ name: 'uploaded_by' })
 uploadedBy!: User;

}