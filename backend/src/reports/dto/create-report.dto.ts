import {IsEnum,IsInt,IsNotEmpty,IsOptional,IsString,} from 'class-validator';

import { CaseStatus } from '../../case_status_history/enums/case_status_history.enum';

export class CreateReportDto {
  @IsNotEmpty()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(CaseStatus)
  status?: CaseStatus;

  @IsNotEmpty()
  @IsInt()
  districtId?: number;

  @IsOptional()
  @IsInt()
  assignedUserId?: number;
}