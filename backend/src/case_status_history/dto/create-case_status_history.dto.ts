import { IsEnum, IsUUID, IsString, IsOptional, IsInt } from 'class-validator';
import { CaseStatus } from '../enums/case_status_history.enum';

export class CreateCaseStatusHistoryDto {

  @IsUUID()
  report_id!: string;

  @IsEnum(CaseStatus)
  status?: CaseStatus;

  @IsOptional()
@IsInt()
changed_by?: number;

  @IsOptional()
  changed_at?: Date;

  @IsOptional()
@IsUUID()
office_id?: string;
}