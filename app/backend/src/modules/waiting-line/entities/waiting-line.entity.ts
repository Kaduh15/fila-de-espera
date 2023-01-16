export class WaitingLine {
  id: string;
  customer: string;
  status: Status;
  createdAt: Date;
  initialServiceTime: Date | null;
  finishedServiceTime: Date | null;
}

export type Status = 'WAITING' | 'IN_PROGRESS' | 'FINISHED' | 'ABSENT';
