import { Test, TestingModule } from '@nestjs/testing';
import { SecurityLogService } from './security-log.service';

describe('SecurityLogService', () => {
  let service: SecurityLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecurityLogService],
    }).compile();

    service = module.get<SecurityLogService>(SecurityLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
