import { ExcursionsService } from './excursions.service';
import { CreateExcursionDto } from './dto/create-excursion.dto';
import { UpdateExcursionDto } from './dto/update-excursion.dto';
import { Excursion } from "./entities/excursion.entity";
export declare class ExcursionsController {
    private readonly excursionsService;
    constructor(excursionsService: ExcursionsService);
    create(createExcursionDto: CreateExcursionDto): Promise<{
        title_en: string;
        description_en: string;
        description_ua: string;
        amount: string;
        duration: string;
        image_url: string;
    } & Excursion>;
    findAll(): Promise<Excursion[]>;
    findOne(id: string): Promise<Excursion[]>;
    update(id: string, updateExcursionDto: UpdateExcursionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
