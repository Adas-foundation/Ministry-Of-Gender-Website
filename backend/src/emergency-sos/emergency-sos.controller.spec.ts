import { Test, TestingModule } from '@nestjs/testing';
import { EmergencySosController } from './emergency-sos.controller';
import { EmergencySosService } from './emergency-sos.service';

describe('EmergencySosController', () => {
  let controller: EmergencySosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmergencySosController],
      providers: [EmergencySosService],
    }).compile();

    controller = module.get<EmergencySosController>(EmergencySosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
