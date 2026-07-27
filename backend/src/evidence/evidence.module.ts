import { Module } from '@nestjs/common';
import { EvidenceService } from './evidence.service';
import { EvidenceController } from './evidence.controller';
import { ExifService } from '../exif/exif.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evidence } from './entities/evidence.entity';
import { EncryptionService } from '../encryption/encryption.service';
import { SecurityLogService } from 'src/security-log/security-log.service';

@Module({
  imports: [TypeOrmModule.forFeature([Evidence])],
  controllers: [EvidenceController],
  providers: [
    EvidenceService,
    ExifService,
    EncryptionService,
    SecurityLogService

  ],
})
export class EvidenceModule {}
