import { MinLength } from 'class-validator';

export class CreateWaitingLineDto {
  @MinLength(4)
  name: string;
}
