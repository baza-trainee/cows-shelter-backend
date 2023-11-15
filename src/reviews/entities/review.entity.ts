import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'Review' })
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_ua: string;

  @Column()
  name_en: string;

  @Column()
  text_ua: string;

  @Column()
  text_en: string;

  @CreateDateColumn()
  createdAt: Date;
}
