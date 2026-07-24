import { Test, TestingModule } from '@nestjs/testing';
import { ExifService } from './exif.service';

describe('ExifService', () => {
  let service: ExifService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExifService],
    }).compile();

    service = module.get<ExifService>(ExifService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
