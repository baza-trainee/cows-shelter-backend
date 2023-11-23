import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'Contacts' })
export class Contacts {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'New email' })
  @Column()
  email: string;

  @ApiProperty({ description: 'New Phone' })
  @Column()
  phone: string;

  @CreateDateColumn()
  createdAt: Date;
}
