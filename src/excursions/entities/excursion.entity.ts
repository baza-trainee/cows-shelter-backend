import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'Excursion' })
export class Excursion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title_en: string;

  @Column()
  title_ua: string;

  @Column()
  description_en: string;

  @Column()
  description_ua: string;

  @Column()
  amount: string;

  @Column()
  duration: string;

  @Column()
  image_url: string;

  @CreateDateColumn()
  createdAt: Date;
}
