import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    create(createNewsDto: CreateNewsDto): Promise<{
        title_en: string;
        title_ua: string;
        content_en: string;
        content_ua: string;
        image_url: string;
    } & News>;
    findAll(): Promise<News[]>;
    findOne(id: string): Promise<News[]>;
    update(id: string, updateNewsDto: UpdateNewsDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
