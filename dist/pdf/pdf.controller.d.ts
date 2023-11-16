import { PdfService } from './pdf.service';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { UpdatePdfDto } from './dto/update-pdf.dto';
import { PDF } from './entities/pdf.entity';
export declare class PdfController {
    private readonly pdfService;
    constructor(pdfService: PdfService);
    create(createPdfDto: CreatePdfDto): Promise<{
        title: string;
        document_url: string;
    } & PDF>;
    findAll(): Promise<PDF[]>;
    findOne(id: string): Promise<PDF[]>;
    update(id: string, updatePdfDto: UpdatePdfDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
