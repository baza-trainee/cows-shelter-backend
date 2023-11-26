/// <reference types="multer" />
import { Excursion } from 'src/excursions/entities/excursion.entity';
import { Gallery } from 'src/gallery/entities/gallery.entity';
import { News } from 'src/news/entities/news.entity';
import { Partner } from 'src/partners/entities/partner.entity';
export declare class IUser {
    id: string;
    email: string;
    access_token: string;
}
export declare class NotFoundResponse {
    status_code: number;
    message: string;
}
export declare class UploadImageResponse {
    imageUrl: string;
}
export declare class FileType {
    file: Express.Multer.File;
}
export declare class ImageResponse {
    images: [Gallery];
    totalLength: number;
}
export declare class PartnerResponse {
    partners: [Partner];
    totalLength: number;
}
export declare class ExcursionResponse {
    excursions: [Excursion];
    totalLength: number;
}
export declare class NewsResponse {
    news: [News];
    totalLength: number;
}
