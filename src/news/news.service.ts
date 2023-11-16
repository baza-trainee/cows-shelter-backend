import {
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
      @InjectRepository(News)
      private readonly newsRepository: Repository<News>,
  ) {}

  async create(createNewsDto: CreateNewsDto) {
    const newNews = {
      title_en: createNewsDto.title_en,
      title_ua: createNewsDto.title_ua,
      content_en: createNewsDto.content_en,
      content_ua: createNewsDto.content_ua,
      image_url: createNewsDto.image_url,
    };
    return await this.newsRepository
        .save(newNews);
  }

  async findAll() {
    return this.newsRepository
        .find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(number: number) {
    return this.newsRepository
        .find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async update(id: number, updateNewsDto: UpdateNewsDto) {
    const news = await this.newsRepository
        .findOne({
      where: { id },
    });
    if (!news) throw new NotFoundException('This news not found');
    return await this.newsRepository
        .update(id, updateNewsDto);
  }

  async remove(id: number) {
    const news = await this.newsRepository
        .findOne({
      where: { id },
    });
    if (!news) throw new NotFoundException('This news not found');
    await this.newsRepository
        .delete(id);
    return { success: true };
  }
}
