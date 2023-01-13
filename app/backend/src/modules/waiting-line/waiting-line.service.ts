import { PrismaService } from './../../database/PrismaService';
import { Injectable } from '@nestjs/common';
import { CreateWaitingLineDto } from './dto/create-waiting-line.dto';
import { UpdateWaitingLineDto } from './dto/update-waiting-line.dto';

@Injectable()
export class WaitingLineService {
  constructor(private prisma: PrismaService) {}

  create(createWaitingLineDto: CreateWaitingLineDto) {
    return this.prisma.waitingLine.create({
      data: createWaitingLineDto,
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

  update(id: string, updateWaitingLineDto: UpdateWaitingLineDto) {
    return this.prisma.waitingLine.update({
      where: { id },
      data: updateWaitingLineDto,
    });
  }

  remove(id: string) {
    return this.prisma.waitingLine.delete({
      where: { id },
    });
  }
}
