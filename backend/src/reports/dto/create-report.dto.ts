import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateReportDto {
  @IsNotEmpty()
  @IsString()
  description?: string;
  @IsString()
  @IsOptional()
  status?: string;
  @IsInt()
  districtId?: number;
  @IsInt()
  assignedUserId?: number;
}
