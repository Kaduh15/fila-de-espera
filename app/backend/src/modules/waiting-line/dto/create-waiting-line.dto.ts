export class CreateWaitingLineDto {
  id?: string;
  customer: string;
  createdAt?: Date;
  initialServiceTime?: Date;
  finishedServiceTime?: Date;
}
