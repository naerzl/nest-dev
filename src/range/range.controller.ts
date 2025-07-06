import { Controller, Get, Req } from '@nestjs/common';
import { RangeService } from './range.service';

@Controller('range')
export class RangeController {
  constructor(private readonly rangeService: RangeService) {}

  @Get(':num')
  getRangeNum(@Req() req) {
    const { num } = req.params;
    if (!Number(num))
      return {
        code: 400,
        msg: '参数错误',
        data: null,
      };
    return this.rangeService.getRangeNum(num);
  }
}
