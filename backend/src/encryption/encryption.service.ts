import { Injectable } from '@nestjs/common';

@Injectable()
export class EncryptionService {

  async encrypt(filePath: string) {

    return {
      path: filePath,
    };
  }

}