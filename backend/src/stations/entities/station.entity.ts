import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany,JoinColumn } from 'typeorm';
import { District } from 'src/district/entities/district.entity';
import { Report } from 'src/reports/entities/report.entity';

@Entity('stations')
export class Station {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'int' })
  district_id!: number;

  @Column()
  name!: string;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 4326,
  })
  location?: {
    type: 'Point';
    coordinates: [number, number];
  };

  @ManyToOne(() => District, district => district.stations)
 @JoinColumn({ name: 'district_id' })
  district!: District;

@OneToMany(() => Report, report => report.station)
 reports!: Report[];

}