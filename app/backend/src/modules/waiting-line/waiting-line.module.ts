import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { WaitingLineService } from './waiting-line.service';
import { WaitingLineController } from './waiting-line.controller';
import { PrismaService } from '../../prisma/PrismaService';
import { AuthMiddleware } from '../../middlewares/auth/auth.middleware';

@Module({
  controllers: [WaitingLineController],
  providers: [PrismaService, WaitingLineService],
})
export class WaitingLineModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: 'waiting-line', method: RequestMethod.GET })
      .forRoutes(WaitingLineController);
  }
}
