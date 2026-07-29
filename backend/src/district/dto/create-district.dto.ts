import {IsString, IsNotEmpty, IsObject, IsOptional} from 'class-validator';
export class CreateDistrictDto {
  @IsString()
  @IsNotEmpty()
  name?: string;
  @IsOptional()
  @IsObject()
  geometry?: object;
}
