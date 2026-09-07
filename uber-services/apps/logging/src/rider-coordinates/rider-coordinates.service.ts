import { Injectable } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RiderCoordinate } from './schemas/rider-coordinates.schema';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinate.name)
    private readonly riderCoordinatesModel: Model<RiderCoordinate>,
  ) {}

  async saveRiderCoordinates(createCoordinateDTO: CreateCoordinatesDTO) {
    return await this.riderCoordinatesModel.create(createCoordinateDTO);
  }
}
