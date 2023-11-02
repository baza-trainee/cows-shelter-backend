import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
export declare class PartnersController {
    private readonly partnersService;
    constructor(partnersService: PartnersService);
    create(createPartnerDto: CreatePartnerDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePartnerDto: UpdatePartnerDto): string;
    remove(id: string): string;
}
