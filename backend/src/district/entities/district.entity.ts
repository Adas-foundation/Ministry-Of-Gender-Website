import {Entity, PrimaryGeneratedColumn,Column} from 'typeorm';
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
  
}
