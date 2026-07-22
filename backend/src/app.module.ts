import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { EvidenceModule } from './evidence/evidence.module';
import { Evidence } from './evidence/entities/evidence.entity';


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
        synchronize: config.get('DB_SYNCHRONIZE') == 'true', 
        entities: [Evidence], 
        logging: true, 
         ssl: {
          rejectUnauthorized: false,
         },
      }), 
   }),

   EvidenceModule,
  ],
   
  controllers: [AppController],
  providers : [AppService],
})

export class AppModule {}
