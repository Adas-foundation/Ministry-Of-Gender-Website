import {IsBoolean,IsEmail,IsInt,IsOptional,IsString,IsDateString} from 'class-validator';

export class CreateSettingDto {
  @IsString()
  platform_name!: string;

  @IsString()
  timezone!: string;

  @IsString()
  language!: string;

  @IsEmail()
  contact_email!: string;

  @IsBoolean()
  two_fa!: boolean;

  @IsInt()
  session_timeout!: number;

  @IsInt()
  password_expiry!: number;

  @IsOptional()
  @IsString()
  ip_whitelist?: string;

  @IsString()
  retention!: string;

  @IsOptional()
  @IsDateString()
  last_backup?: Date;
}