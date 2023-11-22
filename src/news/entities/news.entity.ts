import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'News' })
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Title in Ua' })
  @Column()
  title_en: string;

  @ApiProperty({ description: 'Title in En' })
  @Column()
  title_ua: string;

  @ApiProperty({ description: 'Text in Ua' })
  @Column()
  content_en: string;

  @ApiProperty({ description: 'Text in En' })
  @Column()
  content_ua: string;

  @ApiProperty({ description: 'Image Url' })
  @Column()
  image_url: string;

  @ApiProperty({ description: 'Image Id' })
  @Column()
  image_id: string;

  @CreateDateColumn()
  createdAt: Date;
}
