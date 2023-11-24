import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'PDF' })
export class PDF {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Title of the document' })
  @Column()
  title: string;

  @ApiProperty({ description: 'Url of the uploaded document' })
  @Column()
  document_url: string;

  @ApiProperty({ description: 'Id of the uploaded document' })
  @Column()
  document_id: string;

  @CreateDateColumn()
  createdAt: Date;
}
