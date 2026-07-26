import { IsNumber, IsString, IsInt  } from 'class-validator';

export class CreateStationDto {

  @IsInt()
  district_id!: number;

  @IsString()
  name!: string;

  @IsNumber()
  latitude!: number;

  @IsNumber()
  longitude!: number;

}