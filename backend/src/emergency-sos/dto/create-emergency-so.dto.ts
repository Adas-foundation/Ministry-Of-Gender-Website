import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEmergencySosDto {
  @IsNumber()
  latitude!: number;

  @IsNumber()
  longitude!: number;

  @IsOptional()
  @IsNumber()
  accuracy?: number;

  @IsString()
  source!: string;
}