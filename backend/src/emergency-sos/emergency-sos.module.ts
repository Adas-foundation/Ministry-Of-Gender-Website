import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmergencySosController } from './emergency-sos.controller';
import { EmergencySosService } from './emergency-sos.service';
import { EmergencySos } from './entities/emergency-so.entity';
import { Station } from 'src/stations/entities/station.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EmergencySos,
      Station,
      User,
    ]),
  ],
  controllers: [EmergencySosController],
  providers: [EmergencySosService],
})
export class EmergencySosModule {}
