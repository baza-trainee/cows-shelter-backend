import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
export declare class NewsService {
    create(createNewsDto: CreateNewsDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateNewsDto: UpdateNewsDto): string;
    remove(id: number): string;
}
