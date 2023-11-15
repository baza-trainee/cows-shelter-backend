import { ExcursionsService } from './excursions.service';
import { CreateExcursionDto } from './dto/create-excursion.dto';
import { UpdateExcursionDto } from './dto/update-excursion.dto';
export declare class ExcursionsController {
    private readonly excursionsService;
    constructor(excursionsService: ExcursionsService);
    create(createExcursionDto: CreateExcursionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateExcursionDto: UpdateExcursionDto): string;
    remove(id: string): string;
}
