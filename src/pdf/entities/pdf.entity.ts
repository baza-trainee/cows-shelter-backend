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

  @Column()
  title: string;

  @Column()
  document_url: string;

  @CreateDateColumn()
  createdAt: Date;
}
