/// <reference types="multer" />
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { Gallery } from './entities/gallery.entity';
export declare class GalleryController {
    private readonly galleryService;
    constructor(galleryService: GalleryService);
    findAllWithPagination(req: any, page?: number, limit?: number): Promise<Gallery[]>;
    create(createGalleryDto: CreateGalleryDto): Promise<{
        image_url: string;
    } & Gallery>;
    findAll(): Promise<Gallery[]>;
    findOne(id: string): Promise<Gallery>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
    uploadFile(file: Express.Multer.File): any;
}
