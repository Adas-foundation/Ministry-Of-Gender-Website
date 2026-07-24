import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

}