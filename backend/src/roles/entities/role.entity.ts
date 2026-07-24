import { User } from 'src/users/entities/user.entity';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({name: 'role_name', unique: true})
  roleName?: string;
  @OneToMany(()=> User, (user) =>user.role)
  users?: User[];
}
