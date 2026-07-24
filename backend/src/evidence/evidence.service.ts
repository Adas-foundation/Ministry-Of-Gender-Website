import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evidence } from './entities/evidence.entity';
import { CreateEvidenceDto } from './dto/create-evidence.dto';
import { UpdateEvidenceDto } from './dto/update-evidence.dto';
import { EncryptionService } from '../encryption/encryption.service';
import { ExifService } from '../exif/exif.service';
import { SecurityLogService } from '../security-log/security-log.service';


@Injectable()
export class EvidenceService {

  constructor(
    @InjectRepository(Evidence)
    private readonly evidenceRepository: Repository<Evidence>,
    private readonly encryptionService: EncryptionService,
   private readonly exifService: ExifService,
     private readonly securityLogService: SecurityLogService,
  ) {}


  async upload(
    file: Express.Multer.File,
    createEvidenceDto: CreateEvidenceDto,
  ) {

    const cleanedFile =
      await this.exifService.removeMetadata(file.path);

    const encryptedFile =
      await this.encryptionService.encrypt(cleanedFile);

    const evidence = this.evidenceRepository.create({

        ...createEvidenceDto,

        file_path: encryptedFile.path,

        uploaded_at: new Date(),

        chain_of_custody: [
          {
            action: 'EVIDENCE_UPLOADED',
            timestamp: new Date(),
          },
        ],

      });

    const savedEvidence =
      await this.evidenceRepository.save(evidence);

    await this.securityLogService.createLog({ action: 'EVIDENCE_UPLOADED',
     evidenceId: savedEvidence.id

    });
     return savedEvidence;
  }

  async findAll() {
     return await this.evidenceRepository.find();
    }

  async findOne(id: number) {
     const evidence = await this.evidenceRepository.findOne({
        where: { id },
      });

      if (!evidence) {
      throw new NotFoundException('Evidence not found',);
     }

     return evidence;
  }

 async update(id: number, updateEvidenceDto: UpdateEvidenceDto,)
     {

    const evidence =
      await this.findOne(id);

    const updatedEvidence =
      this.evidenceRepository.merge(evidence,updateEvidenceDto,
      );

      return await this.evidenceRepository.save(updatedEvidence);
    }

async remove(id: number) {
     const evidence = await this.findOne(id);

     await this.evidenceRepository.remove(evidence);

    await this.securityLogService.createLog({action: 'EVIDENCE_DELETED',
      
      evidenceId: id,

    });

    return { message: `Evidence with ID ${id} successfully deleted`,
   };

  }

}