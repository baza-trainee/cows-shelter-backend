import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

@Entity({ name: 'PDF' })
export class PDF {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'PDF`s title' })
  @Column()
  title: string;

  @ApiProperty({ description: 'PDF-document URL' })
  @Column()
  document_url: string;

  @CreateDateColumn()
  createdAt: Date;
}
