import { CreatePdfDto } from './dto/create-pdf.dto';
import { UpdatePdfDto } from './dto/update-pdf.dto';
export declare class PdfService {
    create(createPdfDto: CreatePdfDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePdfDto: UpdatePdfDto): string;
    remove(id: number): string;
}
