import { Injectable } from '@nestjs/common';

@Injectable()
export class RangeService {
  constructor() {}
  getRangeNum(num: number) {
    const data = Array.from({ length: num }).map((_, i) => i.toString());

    return {
      code: 200,
      data,
      message: 'ok',
    };
  }
}
