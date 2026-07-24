import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('evidence')
export class Evidence {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column( )
  report_id?: number;

  @Column()
  file_path!: string;

  @CreateDateColumn()
  uploaded_at?: Date;

  @Column({ type: 'jsonb', nullable: true })
  chain_of_custody!: object;


}