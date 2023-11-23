import { CreateGalleryDto } from './dto/create-gallery.dto';
import { Repository } from 'typeorm';
import { Gallery } from './entities/gallery.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class GalleryService {
    private readonly galleryRepository;
    private readonly cloudinaryService;
    constructor(galleryRepository: Repository<Gallery>, cloudinaryService: CloudinaryService);
    create(createGalleryDto: CreateGalleryDto): Promise<CreateGalleryDto & Gallery>;
    findAll(): Promise<Gallery[]>;
    findOne(id: number): Promise<Gallery>;
    remove(id: number): Promise<{
        success: boolean;
    }>;
    findAllWithPagination(page: number, limit: number): Promise<Gallery[]>;
}
