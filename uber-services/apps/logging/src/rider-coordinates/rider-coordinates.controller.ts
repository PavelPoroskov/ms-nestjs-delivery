import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private coordinatesService: RiderCoordinatesService) {}

  @Get(":id")
  getRiderCoordinates(
    @Param()
    params: any
  ) {
    console.log('params', params)
    return this.coordinatesService.getRiderCoordinates(params.id);
  }

  @Post()
  saveRiderCoordinates(
    @Body()
    createCoordinateDTO: CreateCoordinatesDTO,
  ) {
    return this.coordinatesService.saveRiderCoordinates(createCoordinateDTO);
  }
}

