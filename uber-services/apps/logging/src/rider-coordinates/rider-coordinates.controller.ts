import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private coordinatesService: RiderCoordinatesService) {}

  @Get()
  getRiderCoordinates() {
    return 'hello from getRiderCoordinates()';
  }

  @Post()
  saveRiderCoordinates(
    @Body()
    createCoordinateDTO: CreateCoordinatesDTO,
  ) {
    return this.coordinatesService.saveRiderCoordinates(createCoordinateDTO);
  }
}
