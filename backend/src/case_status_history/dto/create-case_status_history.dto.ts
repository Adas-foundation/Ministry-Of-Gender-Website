import { IsEnum, IsUUID, IsString, IsOptional } from 'class-validator';
import { CaseStatus } from '../enums/case_status_history.enum';

export class CreateCaseStatusHistoryDto {

  @IsUUID()
  report_id!: string;

  @IsEnum(CaseStatus)
  status!: CaseStatus;

  @IsUUID()
  changed_by!: string;

  @IsOptional()
  changed_at?: Date;

  @IsOptional()
@IsUUID()
office_id?: string;
}