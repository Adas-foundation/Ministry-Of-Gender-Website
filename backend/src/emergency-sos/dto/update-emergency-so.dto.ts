import { PartialType } from '@nestjs/swagger';
import { CreateEmergencySosDto } from './create-emergency-so.dto';

export class UpdateEmergencySoDto extends PartialType(CreateEmergencySosDto) {}
