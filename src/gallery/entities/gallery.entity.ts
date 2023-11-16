import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'Gallery' })
export class Gallery {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Url of the image' })
  @Column()
  image_url: string;

  @CreateDateColumn()
  createdAt: Date;
}
