import { CreateGalleryDto } from './dto/create-gallery.dto';
import { Repository } from 'typeorm';
import { Gallery } from './entities/gallery.entity';
export declare class GalleryService {
    private readonly galleryRepository;
    constructor(galleryRepository: Repository<Gallery>);
    create(createGalleryDto: CreateGalleryDto): Promise<{
        image_url: string;
    } & Gallery>;
    findAll(): Promise<Gallery[]>;
    findOne(id: number): Promise<Gallery>;
    remove(id: number): Promise<{
        success: boolean;
    }>;
    findAllWithPagination(page: number, limit: number): Promise<Gallery[]>;
}
