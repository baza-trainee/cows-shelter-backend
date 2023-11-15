import { PdfService } from './pdf.service';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { UpdatePdfDto } from './dto/update-pdf.dto';
export declare class PdfController {
    private readonly pdfService;
    constructor(pdfService: PdfService);
    create(createPdfDto: CreatePdfDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePdfDto: UpdatePdfDto): string;
    remove(id: string): string;
}
