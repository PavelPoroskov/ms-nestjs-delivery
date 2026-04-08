import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  @Get()
  getRiderCoordinates() {
    return 'hello from getRiderCoordinates()';
  }

  @Post()
  saveRiderCoordinates(
    @Body()
    createCoordinateDTO: CreateCoordinatesDTO,
  ) {
    return createCoordinateDTO;
  }
}
