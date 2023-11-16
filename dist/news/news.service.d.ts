import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { Repository } from 'typeorm';
import { News } from './entities/news.entity';
export declare class NewsService {
    private readonly newsRepository;
    constructor(newsRepository: Repository<News>);
    create(createNewsDto: CreateNewsDto): Promise<{
        title_en: string;
        title_ua: string;
        content_en: string;
        content_ua: string;
        image_url: string;
    } & News>;
    findAll(): Promise<News[]>;
    findOne(number: number): Promise<News[]>;
    update(id: number, updateNewsDto: UpdateNewsDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        success: boolean;
    }>;
}
