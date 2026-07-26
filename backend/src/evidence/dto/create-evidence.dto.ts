import { IsNumber, IsOptional, IsObject } from 'class-validator';
import { IsUUID } from 'class-validator';

export class CreateEvidenceDto {

  
  @IsUUID() 
  report_id?: string;

  @IsOptional()
  @IsObject()
  chain_of_custody?: object;

}