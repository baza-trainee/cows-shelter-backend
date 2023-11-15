import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { Repository } from 'typeorm';
import { Partner } from './entities/partner.entity';
export declare class PartnersService {
    private readonly partnerRepository;
    constructor(partnerRepository: Repository<Partner>);
    create(createPartnerDto: CreatePartnerDto): Promise<{
        name: string;
        logo: string;
        link: string;
    } & Partner>;
    findAll(): Promise<Partner[]>;
    update(id: number, updatePartnerDto: UpdatePartnerDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
