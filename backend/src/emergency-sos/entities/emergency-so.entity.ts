import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn} from 'typeorm';

import { Station } from 'src/stations/entities/station.entity';
import { User } from 'src/users/entities/user.entity';

@Entity('emergency_sos')
export class EmergencySos {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'reference_id', unique: true })
  referenceId!: string;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 4326,
  })
  location!: {
    type: 'Point';
    coordinates: [number, number];
  };

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt!: Date;

  @Column({name: 'emergency_type'})
  emergencyType!: string;

  @Column({name: 'status'})
  status!: string;

  @ManyToOne(() => Station)
  @JoinColumn({ name: 'station_id' })
  station!: Station;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'assigned_user_id' })
  assignedUser!: User;
}
