import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DistrictModule } from './district/district.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';



@Module({
  imports: [
    
  DistrictModule,
    
  RolesModule,
    
  UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
