import { Inject, Injectable } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RiderCoordinate } from './schemas/rider-coordinates.schema';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinate.name)
    private readonly riderCoordinatesModel: Model<RiderCoordinate>,
    @Inject('RIDER_SERVICE') private client: ClientProxy,
  ) {}

  async getRiderCoordinates(riderId: string) {
    try {
        console.log('riderId', riderId)
        const coordinates = await this.riderCoordinatesModel.find({ rider: riderId });
        console.log('coordinates', coordinates)

        const pattern = { cmd: 'get-rider' };
        const payload = { id: riderId }
        const rider = await firstValueFrom(this.client.send(pattern, payload));
        console.log('rider', rider)

        return { coordinates, rider }
    }
    catch (error) {
        console.error(error);
        throw new Error(error)
    }
  }

  async saveRiderCoordinates(createCoordinateDTO: CreateCoordinatesDTO) {
    return await this.riderCoordinatesModel.create(createCoordinateDTO);
  }
}
