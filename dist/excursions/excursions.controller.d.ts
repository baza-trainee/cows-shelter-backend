/// <reference types="multer" />
import { ExcursionsService } from './excursions.service';
import { CreateExcursionDto } from './dto/create-excursion.dto';
import { UpdateExcursionDto } from './dto/update-excursion.dto';
import { Excursion } from './entities/excursion.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class ExcursionsController {
    private readonly excursionsService;
    private readonly cloudinaryService;
    constructor(excursionsService: ExcursionsService, cloudinaryService: CloudinaryService);
    findAllWithPagination(req: any, page?: number, limit?: number): Promise<{
        excursions: Excursion[];
        totalLength: number;
    }>;
    create(createExcursionDto: CreateExcursionDto): Promise<CreateExcursionDto & Excursion>;
    findAll(): Promise<Excursion[]>;
    findOne(id: string): Promise<Excursion>;
    update(id: string, updateExcursionDto: UpdateExcursionDto): Promise<{
        success: boolean;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
    uploadFile(file: Express.Multer.File): Promise<any>;
}
