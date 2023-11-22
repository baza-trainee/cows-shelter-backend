import { CreatePdfDto } from './dto/create-pdf.dto';
import { UpdatePdfDto } from './dto/update-pdf.dto';
import { Repository } from 'typeorm';
import { PDF } from './entities/pdf.entity';
export declare class PdfService {
    private readonly pdfRepository;
    constructor(pdfRepository: Repository<PDF>);
    create(createPdfDto: CreatePdfDto): Promise<CreatePdfDto & PDF>;
    findAll(): Promise<PDF[]>;
    findOne(id: number): Promise<PDF>;
    update(id: number, updatePdfDto: UpdatePdfDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        success: boolean;
    }>;
}
