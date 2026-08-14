import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Station } from './entities/station.entity';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';

@Injectable()
export class StationsService {

  constructor(
    @InjectRepository(Station)
    private readonly stationRepository: Repository<Station>,
  ) {}

  async create(createStationDto: CreateStationDto) {

    const station = this.stationRepository.create({
       district_id: createStationDto.district_id,
        name: createStationDto.name,
       location: {
        type: 'Point',
        coordinates: [
          createStationDto.longitude,
          createStationDto.latitude,
        ],
      },

    });

    return await this.stationRepository.save(station);
  }

  async findAll() {

    return await this.stationRepository.find();

  }

  async findOne(id: number) {

    const station = await this.stationRepository.findOne({
      where: { id },
    });

    if (!station) {
      throw new NotFoundException(
        `Station with ID ${id} not found`,
      );
    }

    return station;
  }

  async update(
    id: number,
    updateStationDto: UpdateStationDto,
  ) {

    const station = await this.findOne(id);

    if (updateStationDto.name) {
      station.name = updateStationDto.name;
    }

    if (updateStationDto.district_id) {
      station.district_id = updateStationDto.district_id;
    }

    if (
      updateStationDto.latitude &&
      updateStationDto.longitude
    ) {

      station.location = {

        type: 'Point',

        coordinates: [
          updateStationDto.longitude,
          updateStationDto.latitude,
        ],

      };

    }

    return await this.stationRepository.save(station);

  }

async remove(id: number) {

    const station = await this.findOne(id);

    await this.stationRepository.remove(station);

    return {
      message: `Station with ID ${id} successfully deleted`,
    };

  }

  async findNearest(
    latitude: number,
    longitude: number,
  ) {
    const station = await this.stationRepository
      .createQueryBuilder('station')

      .orderBy(
        `ST_Distance(
          station.location,
          ST_SetSRID(
            ST_Point(:longitude, :latitude),
            4326
          )
        )`,
        'ASC',
      )

      .setParameters({
        longitude,
        latitude,
      })

      .limit(1)

      .getOne();

   if (!station) {
      throw new NotFoundException(
        'No nearby station found',
        );

    }

    return station;
  }

  async findByDistrict(districtId: number) {
  const stations = await this.stationRepository.find({
    where: { district_id: districtId },
  });

  if (!stations.length) {
    throw new NotFoundException(
      `No stations found for district ID ${districtId}`,
    );
  }

  return stations;
}
}