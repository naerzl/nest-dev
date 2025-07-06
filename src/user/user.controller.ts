import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  @Get()
  getUser() {
    console.log(this.configService.get('token'), '@@@@@@@');
    return this.userService.getUsers();
  }

  @Post()
  createUser() {
    return this.userService.createUser();
  }

  @Delete()
  deleteUser() {
    return {
      code: 200,
      data: null,
      message: 'ok',
    };
  }
}
