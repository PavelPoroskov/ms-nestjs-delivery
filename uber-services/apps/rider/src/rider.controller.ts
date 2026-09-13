import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Get(':id')
  getRiderById(
    @Param()
    params: any
  ) {
    return {
      _id: params.id,
      firstName: 'Joe',
      lastName: 'Smith',
      email: 'joe@gmail.com',
    };
  }
}
