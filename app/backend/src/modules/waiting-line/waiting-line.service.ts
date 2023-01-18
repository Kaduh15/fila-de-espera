import { PrismaService } from '../../prisma/PrismaService';
import { HttpException, Injectable } from '@nestjs/common';
import { CreateWaitingLineDto } from './dto/create-waiting-line.dto';
import { UpdateWaitingLineDto } from './dto/update-waiting-line.dto';

@Injectable()
export class WaitingLineService {
  constructor(private prisma: PrismaService) {}

  create(createWaitingLineDto: CreateWaitingLineDto) {
    return this.prisma.waitingLine.create({
      data: {
        name: createWaitingLineDto.name,
      },
    });
  }

  findAll() {
    return this.prisma.waitingLine.findMany();
  }

  findOne(id: string) {
    return this.prisma.waitingLine.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateWaitingLineDto: UpdateWaitingLineDto) {
    return await this.prisma.waitingLine.update({
      where: { id },
      data: updateWaitingLineDto,
    });
  }

  remove(id: string) {
    return this.prisma.waitingLine.delete({
      where: { id },
    });
  }

  async startService(id: string) {
    const isIdValid = await this.prisma.waitingLine.findUnique({
      where: { id },
    });

    if (!isIdValid) throw new HttpException('Invalid ID', 400);
    if (isIdValid.status !== 'WAITING')
      throw new HttpException('Invalid status', 400);

    return await this.prisma.waitingLine.update({
      where: { id },
      data: {
        status: 'IN_PROGRESS',
        initialServiceTime: new Date(),
      },
    });
  }

  async finishService(id: string) {
    const isIdValid = await this.prisma.waitingLine.findUnique({
      where: { id },
    });

    if (!isIdValid) throw new HttpException('Invalid ID', 400);
    if (isIdValid.status !== 'IN_PROGRESS')
      throw new HttpException('Invalid status', 400);

    return await this.prisma.waitingLine.update({
      where: { id },
      data: {
        status: 'FINISHED',
        finishedServiceTime: new Date(),
      },
    });
  }

  async absent(id: string) {
    const isIdValid = await this.prisma.waitingLine.findUnique({
      where: { id },
    });

    if (!isIdValid) throw new HttpException('Invalid ID', 400);
    if (isIdValid.status !== 'WAITING')
      throw new HttpException('Invalid status', 400);

    return await this.prisma.waitingLine.update({
      where: { id },
      data: {
        status: 'ABSENT',
      },
    });
  }

  async findToday() {
    const result = await this.prisma.waitingLine.findMany({
      where: {
        createdAt: {
          gt: new Date(new Date().setHours(0, 0, 0, 0)),
          lte: new Date(new Date().setHours(23, 59, 59, 999)),
        },
      },
    });
    console.log(
      '🚀 ~ file: waiting-line.service.ts:102 ~ WaitingLineService ~ findToday ~ result',
      result,
    );

    return result;
  }
}
