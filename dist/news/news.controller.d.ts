import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    create(createNewsDto: CreateNewsDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateNewsDto: UpdateNewsDto): string;
    remove(id: string): string;
}
