import { CreateExcursionDto } from './dto/create-excursion.dto';
import { UpdateExcursionDto } from './dto/update-excursion.dto';
import { Repository } from 'typeorm';
import { Excursion } from './entities/excursion.entity';
export declare class ExcursionsService {
    private readonly excursionsRepository;
    constructor(excursionsRepository: Repository<Excursion>);
    create(createExcursionDto: CreateExcursionDto): Promise<CreateExcursionDto & Excursion>;
    findAll(): Promise<Excursion[]>;
    findOne(id: number): Promise<Excursion>;
    update(id: number, updateExcursionDto: UpdateExcursionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        success: boolean;
    }>;
    findAllWithPagination(page: number, limit: number): Promise<Excursion[]>;
}
