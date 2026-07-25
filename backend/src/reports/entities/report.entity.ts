import { District } from 'src/district/entities/district.entity';
import { User } from '../../users/entities/user.entity';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn} from 'typeorm';
@Entity('reports')
export class Report {
@PrimaryGeneratedColumn()
id?: number;
@Column({name: 'reference_number', unique: true})
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
@Column({type: 'text'})
description?: string;
@ManyToOne(()=> District)
@JoinColumn({name: 'district_id'})
district?: District;
@ManyToOne(() => User, user => user.assignedReports)
@JoinColumn({ name: 'assigned_user_id' })
assignedUser?: User;


}
