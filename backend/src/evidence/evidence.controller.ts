import { Controller,Get,Post,Body,Patch,Param,Delete,UploadedFile,UseInterceptors,} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { EvidenceService } from './evidence.service';
import { CreateEvidenceDto } from './dto/create-evidence.dto';
import { UpdateEvidenceDto } from './dto/update-evidence.dto';

@Controller('evidence')
export class EvidenceController {
  constructor(private readonly evidenceService: EvidenceService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { 
  storage: diskStorage({
      destination: './uploads/evidence',
      filename: (req, file, callback) => {
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
        callback(null, uniqueName + extname(file.originalname));
      },
    }),
  }),
)
uploadEvidence(
  @UploadedFile() file: Express.Multer.File,
  @Body() createEvidenceDto: CreateEvidenceDto,
) {
  return this.evidenceService.upload(file, createEvidenceDto);
}

  @Get()
  findAll() {
    return this.evidenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evidenceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvidenceDto: UpdateEvidenceDto) {
    return this.evidenceService.update(+id, updateEvidenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evidenceService.remove(+id);
  }
}
