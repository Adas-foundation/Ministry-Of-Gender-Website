import {Controller,Get,Post,Body,Patch,Param,Delete,Query,ParseIntPipe,BadRequestException} from '@nestjs/common';
import { StationsService } from './stations.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';

@Controller('stations')
export class StationsController {
  constructor(private readonly stationsService: StationsService) {}

  @Post()
  async create(@Body() createStationDto: CreateStationDto) {
    return await this.stationsService.create(createStationDto);
  }

  @Get()
  async findAll() {
    return await this.stationsService.findAll();
  }

  @Get('nearest')
  async findNearest(
    @Query('latitude') latitude: string,
    @Query('longitude') longitude: string,
  ) {
    const lat = Number(latitude);
    const lng = Number(longitude);

    if (isNaN(lat) || isNaN(lng)) {
      throw new BadRequestException(
        'Latitude and longitude must be valid numbers.',
      );
    }
    return await this.stationsService.findNearest(lat, lng);
  }

  @Get('district/:districtId')
  async findByDistrict(
    @Param('districtId', ParseIntPipe) districtId: number,
  ) {
    return await this.stationsService.findByDistrict(districtId);
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.stationsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStationDto: UpdateStationDto,
  ) {
    return await this.stationsService.update(id, updateStationDto);
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.stationsService.remove(id);
  }
}