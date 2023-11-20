import { CreateExcursionDto } from './dto/create-excursion.dto';
import { UpdateExcursionDto } from './dto/update-excursion.dto';
export declare class ExcursionsService {
    create(createExcursionDto: CreateExcursionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateExcursionDto: UpdateExcursionDto): string;
    remove(id: number): string;
}
