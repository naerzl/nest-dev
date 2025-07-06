import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}

  getUsers() {
    return {
      code: 200,
      message: 'Welcome To User',
      data: [],
    };
  }

  createUser() {
    return {
      code: 200,
      message: '添加成功',
      data: null,
    };
  }
}
