import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/sapi/v1/user')
export class UserController {
  @Get('/abc')
  getAll(@Req() request: Request) {
    return {
      code: 0,
      data: [{ a: 123 }],
    };
  }
  @Post('/abc')
  post() {
    return {
      code: 0,
      data: [{ a: 123 }],
    };
  }
}
