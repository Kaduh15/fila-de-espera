import { PartialType } from '@nestjs/mapped-types';
import { Status } from '../entities/waiting-line.entity';
import { CreateWaitingLineDto } from './create-waiting-line.dto';
export class UpdateWaitingLineDto extends PartialType(CreateWaitingLineDto) {
  id?: string;
  createdAt?: Date;
  status?: Status;
  initialServiceTime?: Date;
  finishedServiceTime?: Date;
}
