import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'Partners' })
export class Partner {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Partner`s name' })
  @Column()
  name: string;

  @ApiProperty({ description: 'Partner`s logo' })
  @Column()
  logo: string;

  @ApiProperty({ description: 'Link to partner`s website' })
  @Column()
  link: string;

  @ApiProperty({ description: 'cloudinary public id of the image' })
  @Column()
  image_id: string;

  @CreateDateColumn()
  createdAt: Date;
}
