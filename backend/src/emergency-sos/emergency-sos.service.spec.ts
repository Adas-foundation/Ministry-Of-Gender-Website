import { Test, TestingModule } from '@nestjs/testing';
import { EmergencySosService } from './emergency-sos.service';

describe('EmergencySosService', () => {
  let service: EmergencySosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmergencySosService],
    }).compile();

    service = module.get<EmergencySosService>(EmergencySosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
