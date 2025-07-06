import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RangeModule } from './range/range.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';

@Module({
  imports: [
    UserModule,
    RangeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DBASE_URL: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('user');
  }
}
