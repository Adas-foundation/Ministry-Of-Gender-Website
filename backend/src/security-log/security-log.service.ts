import { Injectable } from '@nestjs/common';

@Injectable()
export class SecurityLogService {

  async createLog(data: {
    action: string;
    evidenceId: number;
  }) {

    return data;
  }

}