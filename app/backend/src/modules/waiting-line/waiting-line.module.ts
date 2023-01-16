import { Module } from '@nestjs/common';
import { WaitingLineService } from './waiting-line.service';
import { WaitingLineController } from './waiting-line.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [WaitingLineController],
  providers: [PrismaService, WaitingLineService],
})
export class WaitingLineModule {}
