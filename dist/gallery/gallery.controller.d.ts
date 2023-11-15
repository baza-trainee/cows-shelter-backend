import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
export declare class GalleryController {
    private readonly galleryService;
    constructor(galleryService: GalleryService);
    findAllWithPagination(req: any, page?: number, limit?: number): Promise<import("./entities/gallery.entity").Gallery[]>;
    create(createGalleryDto: CreateGalleryDto): Promise<{
        image_url: string;
    } & import("./entities/gallery.entity").Gallery>;
    findAll(): Promise<import("./entities/gallery.entity").Gallery[]>;
    findOne(id: string): Promise<import("./entities/gallery.entity").Gallery>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
