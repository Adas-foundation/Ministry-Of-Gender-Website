import { PartialType } from '@nestjs/mapped-types';
import { CreateCaseStatusHistoryDto } from './create-case_status_history.dto';

export class UpdateCaseStatusHistoryDto extends PartialType(CreateCaseStatusHistoryDto) {}
