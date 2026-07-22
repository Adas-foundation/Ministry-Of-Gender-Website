import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './entities/district.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(District)
    private districtRepository: Repository<District>,
  ) {}

  async create(createDistrictDto: CreateDistrictDto) {
    const district = this.districtRepository.create(createDistrictDto);
    return await this.districtRepository.save(district);
  }

  async findAll() {
    return await this.districtRepository.find();
  }

  async findOne(id: number) {
    return await this.districtRepository.findOne({where: {id}, });
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    await this.districtRepository.update(id, updateDistrictDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.districtRepository.delete(id);
  }
}
