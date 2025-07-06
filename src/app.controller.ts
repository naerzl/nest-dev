import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    console.log(this.configService.get('token'));
    return this.appService.getHello();
  }

  @Get('/app')
  getApp() {
    return {
      code: 200,
      message: '请求成功',
      data: 'Hello Nestjs',
    };
  }
}
