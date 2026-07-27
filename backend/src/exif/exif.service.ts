import { Injectable } from '@nestjs/common';

@Injectable()
export class ExifService {

  async removeMetadata(filePath: string) {

    return filePath;
  }

}