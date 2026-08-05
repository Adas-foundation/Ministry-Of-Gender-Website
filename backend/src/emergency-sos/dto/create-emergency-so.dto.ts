import { IsNumber, IsString } from 'class-validator';

export class CreateEmergencySosDto {
  @IsNumber()
  latitude!: number;

  @IsNumber()
  longitude!: number;

  @IsString()
  emergencyType!: string;
}
