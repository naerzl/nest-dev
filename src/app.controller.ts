import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/sapi/v1')
export class AppController {
  private readonly appService: AppService;

  constructor() {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/abc')
  postHello() {
    return this.appService.postHello();
  }
}
