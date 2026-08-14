import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LogiDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ){}
  async login(loginDto: LogiDto){
    const user=await this.userRepository.findOne({
      where: { email: loginDto.email},
      relations: { role: true },
    });
    if(!user){
      throw new UnauthorizedException('Invalid email or password');
    }
    const password = loginDto.password ?? '';
    if (!user.password) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const payload={
      sub: user.id,
      email: user.email,
      role: user.role?.roleName,
    };
    return{
      access_token: this.jwtService.sign(payload), user,
    };
  }
}
