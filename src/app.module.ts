import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RangeModule } from './range/range.module';

@Module({
  imports: [UserModule, RangeModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('user');
  }
}
