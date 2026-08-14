import {Entity, PrimaryGeneratedColumn,Column, OneToMany} from 'typeorm';
import { Report } from '../../reports/entities/report.entity';
import { Station } from 'src/stations/entities/station.entity';

@Entity('districts')
export class District {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({unique: true})
  name?: string;
  @Column({
    type: 'geometry',
    spatialFeatureType: 'MultiPolygon',
    srid: 4326,
  })
  geometry?: object;
  @OneToMany(() => Report, (report) => report.district)
  reports?: Report[];

  @OneToMany(() => Station, station => station.district)
 stations!: Station[];
}
