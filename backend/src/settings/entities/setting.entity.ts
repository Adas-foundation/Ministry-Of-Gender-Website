import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('settings')
export class Setting {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  platform_name!: string;

  @Column()
  timezone!: string;

  @Column()
  language!: string;

  @Column()
  contact_email!: string;

  @Column({ default: true })
  two_fa!: boolean;

  @Column({ type: 'int', default: 30 })
  session_timeout!: number;

  @Column({ type: 'int', default: 90 })
  password_expiry!: number;

  @Column({ type: 'text', nullable: true })
  ip_whitelist?: string;

  @Column()
  retention!: string;

  @Column({ type: 'timestamp', nullable: true })
  last_backup?: Date;
}