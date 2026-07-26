import { Test, TestingModule } from '@nestjs/testing';
import { CaseStatusHistoryController } from './case_status_history.controller';
import { CaseStatusHistoryService } from './case_status_history.service';

describe('CaseStatusHistoryController', () => {
  let controller: CaseStatusHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaseStatusHistoryController],
      providers: [CaseStatusHistoryService],
    }).compile();

    controller = module.get<CaseStatusHistoryController>(CaseStatusHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
