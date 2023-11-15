import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
export declare class PartnersController {
    private readonly partnersService;
    constructor(partnersService: PartnersService);
    create(createPartnerDto: CreatePartnerDto): Promise<{
        name: string;
        logo: string;
        link: string;
    } & import("./entities/partner.entity").Partner>;
    findAll(): Promise<import("./entities/partner.entity").Partner[]>;
    update(id: string, updatePartnerDto: UpdatePartnerDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
