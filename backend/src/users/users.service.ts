import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/roles/entities/role.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)private readonly userRepository: Repository<User>,
    @InjectRepository(Role)private readonly rolesRepository: Repository<Role>
  ){}
    
  async create(createUserDto: CreateUserDto) {
    const role=await this.rolesRepository.findOne({where: {id: createUserDto.roleId}});
    if(!role){
      throw new NotFoundException('Role not found')
    }
    if (!createUserDto.password) {
      throw new BadRequestException('Password is required');
    }
    const hashedPassword=await bcrypt.hash(createUserDto.password, 10);
    const user =this.userRepository.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: hashedPassword,
      role,

    });
    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find({ relations: { role: true } });
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id }, relations: { role: true } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    
    if (updateUserDto.roleId) {
      const role = await this.rolesRepository.findOne({ where: { id: updateUserDto.roleId } });
      if (!role) {
        throw new NotFoundException('Role not found');
      }
      user.role = role!;
    }
    if(updateUserDto.name){
      user.name=updateUserDto.name;
    }
    if(updateUserDto.email){
      user.email=updateUserDto.email;
    }
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return await this.userRepository.remove(user);
  }
}
