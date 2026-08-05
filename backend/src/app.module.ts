import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { EvidenceModule } from './evidence/evidence.module';
import { Evidence } from './evidence/entities/evidence.entity';
import { EncryptionModule } from './encryption/encryption.module';
import { ExifModule } from './exif/exif.module';
import { SecurityLogModule } from './security-log/security-log.module';
import { StationsModule } from './stations/stations.module';
import { Station } from './stations/entities/station.entity';
import { CaseStatusHistoryModule } from './case_status_history/case_status_history.module';
import { NotificationsModule } from './notifications/notifications.module';
import { DistrictModule } from './district/district.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { AuthModule } from './auth/auth.module';
import { EmailService } from './email/email.service';
import { EmailModule } from './email/email.module';
import { EmergencySosModule } from './emergency-sos/emergency-sos.module';

@Module({
  imports:[ 
    ConfigModule.forRoot({ isGlobal: true }), 
    TypeOrmModule.forRootAsync({ 
      imports: [ConfigModule], 
      inject: [ConfigService], 
      useFactory: (config: ConfigService) => ({ 
        type: 'postgres', 
        host: config.get('DB_HOST'), 
        port: parseInt(config.get('DB_PORT', '5432')), 
        username: config.get('DB_USER'), 
        password: config.get('DB_PASSWORD'), 
        database: config.get('DB_NAME'),
        synchronize: config.get('DB_SYNCHRONIZE') === 'true',
        autoLoadEntities: true,
        logging: true,
        ssl: config.get('DB_SSL') === 'true' ? { rejectUnauthorized: false } : false,
      }),
   }),

   EvidenceModule,

   EncryptionModule,

   ExifModule,

   SecurityLogModule,

   StationsModule,

   CaseStatusHistoryModule,

   NotificationsModule,

   DistrictModule,

    RolesModule,

    UsersModule,

    ReportsModule,

    AuthModule,

    EmailModule,

    EmergencySosModule,

  ],
   
  controllers: [AppController],
  providers : [AppService, EmailService],
})

export class AppModule {}