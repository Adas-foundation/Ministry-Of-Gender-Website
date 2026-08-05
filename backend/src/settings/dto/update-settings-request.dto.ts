import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateSettingDto } from './update-setting.dto';

export class UpdateSettingsRequestDto {
  @ValidateNested()
  @Type(() => UpdateSettingDto)
  settings!: UpdateSettingDto;
}