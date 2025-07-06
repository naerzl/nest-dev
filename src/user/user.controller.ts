import { Body, Controller, Delete, Get, Post, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUser(@Req() req) {
    console.log(req);
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Req() req, @Body() body) {
    console.log(req.body);
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
