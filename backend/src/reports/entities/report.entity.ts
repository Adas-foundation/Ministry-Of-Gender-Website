
import { District } from 'src/district/entities/district.entity';
import { User } from '../../users/entities/user.entity';
import { Evidence } from 'src/evidence/entities/evidence.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Station } from 'src/stations/entities/station.entity';
import { CaseStatusHistory } from 'src/case_status_history/entities/case_status_history.entity';

@Entity('reports')
export class Report {
  @PrimaryGeneratedColumn('uuid') 
  id!: string;
  @Column({ name: 'reference_number', unique: true })
  referenceNumber?: string;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,
  })
  incidentLocation?: object;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,
  })
  reporterLocation?: object;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt?: Date;

  @Column()
  status?: string;

  @Column({ type: 'text' })
  description?: string;

  @ManyToOne(() => District)
  @JoinColumn({ name: 'district_id' })
  district?: District;

  @ManyToOne(() => User, user => user.assignedReports)
  @JoinColumn({ name: 'assigned_user_id' })
  assignedUser?: User;

  @OneToMany(() => Evidence, evidence => evidence.report)
  evidence!: Evidence[];

  @ManyToOne(() => Station, station => station.reports)
  @JoinColumn({ name: 'station_id' })
  station!: Station;

  @OneToMany(
  () => CaseStatusHistory,
  statusHistory => statusHistory.report
)
statusHistory!: CaseStatusHistory[];

}

