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

  @Column()
  image_url: string;

  @CreateDateColumn()
  createdAt: Date;
}
