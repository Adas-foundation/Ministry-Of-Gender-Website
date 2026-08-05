import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Setting } from './entities/setting.entity';
import { UpdateSettingDto } from './dto/update-setting.dto';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Setting)
    private readonly settingsRepository: Repository<Setting>,
  ) {}

  async getSettings() {
    let settings = await this.settingsRepository.findOne({
      where: {},
    });

    if (!settings) {
      settings = this.settingsRepository.create({
        platform_name: 'SafeReport Malawi',
        timezone: 'Central Africa Time (CAT) - UTC+2',
        language: 'English (UK)',
        contact_email: 'support@gender.gov.mw',
        two_fa: true,
        session_timeout: 30,
        password_expiry: 90,
        ip_whitelist: '',
        retention: '7 Years (Default Legal Requirement)',
        last_backup: undefined,
      });

      await this.settingsRepository.save(settings);
    }

    return settings;
  }

  async updateSettings(updateDto: UpdateSettingDto) {
    let settings = await this.settingsRepository.findOne({
      where: {},
    });

    if (!settings) {
      settings = this.settingsRepository.create();
    }

    Object.assign(settings, updateDto);

    return this.settingsRepository.save(settings);
  }
}