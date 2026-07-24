import {IsString, IsNotEmpty, IsObject} from 'class-validator';
export class CreateDistrictDto {
  @IsString()
  @IsNotEmpty()
  name?: string;
  @IsObject()
  geometry?: object;
}
