/// <reference types="multer" />
import { PdfService } from './pdf.service';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { UpdatePdfDto } from './dto/update-pdf.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class PdfController {
    private readonly pdfService;
    private readonly cloudinaryService;
    constructor(pdfService: PdfService, cloudinaryService: CloudinaryService);
    create(createPdfDto: CreatePdfDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePdfDto: UpdatePdfDto): string;
    remove(id: string): string;
    uploadFile(file: Express.Multer.File): Promise<any>;
}
