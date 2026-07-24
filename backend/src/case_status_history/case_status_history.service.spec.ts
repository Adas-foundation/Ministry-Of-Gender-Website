import { Test, TestingModule } from '@nestjs/testing';
import { CaseStatusHistoryService } from './case_status_history.service';

describe('CaseStatusHistoryService', () => {
  let service: CaseStatusHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaseStatusHistoryService],
    }).compile();

    service = module.get<CaseStatusHistoryService>(CaseStatusHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
