import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: 'mySecretKey',
      signOptions: {
        expiresIn: '1d',
      },
    }) ,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports:[AuthService],
})
export class AuthModule {}
