import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { Repository } from 'typeorm';
import { Partner } from './entities/partner.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class PartnersService {
    private readonly partnerRepository;
    private readonly cloudinaryService;
    constructor(partnerRepository: Repository<Partner>, cloudinaryService: CloudinaryService);
    create(createPartnerDto: CreatePartnerDto): Promise<CreatePartnerDto & Partner>;
    findAll(): Promise<Partner[]>;
    update(id: number, updatePartnerDto: UpdatePartnerDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        success: boolean;
    }>;
    findAllWithPagination(page: number, limit: number): Promise<{
        posts: Partner[];
        totalLength: number;
    }>;
}
