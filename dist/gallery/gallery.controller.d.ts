/// <reference types="multer" />
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { Gallery } from './entities/gallery.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class GalleryController {
    private readonly galleryService;
    private readonly cloudinaryService;
    constructor(galleryService: GalleryService, cloudinaryService: CloudinaryService);
    findAllWithPagination(req: any, page?: number, limit?: number): Promise<Gallery[]>;
    create(createGalleryDto: CreateGalleryDto): Promise<CreateGalleryDto & Gallery>;
    findAll(): Promise<Gallery[]>;
    findOne(id: string): Promise<Gallery>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
    uploadFile(file: Express.Multer.File): Promise<any>;
}
