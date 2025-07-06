import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/sapi/v1')
export class AppController {
  private readonly appService: AppService;

  constructor() {}

  @Get()
  getHello(): string {
    console.log(this.appService);
    return this.appService.getHello();
  }
}
