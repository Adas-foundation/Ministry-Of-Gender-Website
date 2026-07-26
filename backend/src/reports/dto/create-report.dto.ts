import { IsInt, IsNotEmpty, IsOptional, IsString, IsEnum  } from "class-validator";;
import { CaseStatus } from '../../case_status_history/enums/case_status_history.enum';

export class CreateReportDto {
  @IsNotEmpty()
  @IsString()
  description?: string;
  @IsEnum(CaseStatus)
  status?: CaseStatus;
  @IsInt()
  districtId?: number;
  @IsInt()
  assignedUserId?: number;
}
