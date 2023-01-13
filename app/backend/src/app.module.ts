import { AuthMiddleware } from './middlewares/auth/auth.middleware';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './modules/login/login.module';
import { WaitingLineModule } from './modules/waiting-line/waiting-line.module';
import { WaitingLineController } from './modules/waiting-line/waiting-line.controller';
@Module({
  imports: [LoginModule, WaitingLineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: 'waiting-line', method: RequestMethod.GET })
      .forRoutes(WaitingLineController);
  }
}
