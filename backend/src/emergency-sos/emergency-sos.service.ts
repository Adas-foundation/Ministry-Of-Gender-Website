import {Injectable,NotFoundException} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { randomBytes } from 'crypto';

import { EmergencySos } from './entities/emergency-so.entity';
import { CreateEmergencySosDto } from './dto/create-emergency-so.dto';

import { Station } from 'src/stations/entities/station.entity';


@Injectable()
export class EmergencySosService {

  constructor(
    @InjectRepository(EmergencySos)
    private readonly emergencySosRepository: Repository<EmergencySos>,

    @InjectRepository(Station)
    private readonly stationRepository: Repository<Station>,
  ) {}


  private generateReferenceId(): string {
    return `SOS-${randomBytes(5).toString('hex').toUpperCase()}`;
  }


  async create(createEmergencySosDto: CreateEmergencySosDto) {
    const point: { type: 'Point'; coordinates: [number, number] } = {
      type: 'Point',
      coordinates: [
        createEmergencySosDto.longitude,
        createEmergencySosDto.latitude,
      ],
    };

    const nearestStation = await this.stationRepository
      .createQueryBuilder('station')
      .orderBy(
        `ST_Distance(station.location,ST_SetSRID(ST_GeomFromGeoJSON(:point),4326) )`,'ASC',).setParameter('point',JSON.stringify(point),)
      .getOne();

    if (!nearestStation) {
      throw new NotFoundException(
        'No emergency station found',
      );
    }
    const emergencyType =
      (createEmergencySosDto as any).emergencyType ??
      (createEmergencySosDto as any).type ??
      (createEmergencySosDto as any).emergency_type;

    const sos = this.emergencySosRepository.create({
      referenceId: this.generateReferenceId(),
      location: point as any,
      emergencyType,
      status: 'PENDING',
      station: nearestStation,
    });
    return await this.emergencySosRepository.save(sos);
  }

  async findAll() {
    return await this.emergencySosRepository.find({
      relations: {
        station: true,
      },
    });
  }

  async findOne(id: string) {

    const sos = await this.emergencySosRepository.findOne({
      where: { id },
      relations: {
        station: true,
      },
    });

    if (!sos) {
      throw new NotFoundException(
        'Emergency SOS not found',
      );
    }

    return sos;
  }

  async update(
    id: string,
    updateData: Partial<EmergencySos>,
  ) {

    const sos = await this.findOne(id);

    Object.assign(sos, updateData);

    return await this.emergencySosRepository.save(sos);
  }

  async remove(id: string) {

    const sos = await this.findOne(id);

    return await this.emergencySosRepository.remove(sos);
  }
}