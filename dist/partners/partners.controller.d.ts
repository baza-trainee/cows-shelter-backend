/// <reference types="multer" />
import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { Partner } from './entities/partner.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class PartnersController {
    private readonly partnersService;
    private readonly cloudinaryService;
    constructor(partnersService: PartnersService, cloudinaryService: CloudinaryService);
    findAllWithPagination(req: any, page?: number, limit?: number): Promise<{
        partners: Partner[];
        totalLength: number;
    }>;
    create(createPartnerDto: CreatePartnerDto): Promise<CreatePartnerDto & Partner>;
    findAll(): Promise<Partner[]>;
    update(id: string, updatePartnerDto: UpdatePartnerDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
    uploadFile(file: Express.Multer.File): Promise<any>;
}
