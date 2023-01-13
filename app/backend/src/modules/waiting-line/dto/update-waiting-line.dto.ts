import { PartialType } from '@nestjs/mapped-types';
import { CreateWaitingLineDto } from './create-waiting-line.dto';

export class UpdateWaitingLineDto extends PartialType(CreateWaitingLineDto) {}
