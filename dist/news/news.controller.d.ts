/// <reference types="multer" />
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class NewsController {
    private readonly newsService;
    private readonly cloudinaryService;
    constructor(newsService: NewsService, cloudinaryService: CloudinaryService);
    findAllWithPagination(req: any, page?: number, limit?: number): Promise<{
        posts: News[];
        totalLength: number;
    }>;
    create(createNewsDto: CreateNewsDto): Promise<CreateNewsDto & News>;
    findAll(): Promise<News[]>;
    findOne(id: string): Promise<News>;
    update(id: string, updateNewsDto: UpdateNewsDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
    uploadFile(file: Express.Multer.File): Promise<any>;
}
