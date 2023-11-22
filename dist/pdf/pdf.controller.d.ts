/// <reference types="multer" />
import { PdfService } from './pdf.service';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { UpdatePdfDto } from './dto/update-pdf.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { PDF } from './entities/pdf.entity';
export declare class PdfController {
    private readonly pdfService;
    private readonly cloudinaryService;
    constructor(pdfService: PdfService, cloudinaryService: CloudinaryService);
    create(createPdfDto: CreatePdfDto): Promise<CreatePdfDto & PDF>;
    findAll(): Promise<PDF[]>;
    findOne(id: string): Promise<PDF>;
    update(id: string, updatePdfDto: UpdatePdfDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
    uploadFile(file: Express.Multer.File): Promise<any>;
}
