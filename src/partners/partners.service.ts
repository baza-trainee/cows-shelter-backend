import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { Repository } from 'typeorm';
import { Partner } from './entities/partner.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class PartnersService {
  constructor(
    @InjectRepository(Partner)
    private readonly partnerRepository: Repository<Partner>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(createPartnerDto: CreatePartnerDto) {
    const isExist = await this.partnerRepository.findOne({
      where: {
        link: createPartnerDto.link,
      },
    });
    if (isExist) throw new BadRequestException('Цей Партнер вже існує');

    return await this.partnerRepository.save(createPartnerDto);
  }

  async findAll() {
    return await this.partnerRepository.find();
  }

  async update(id: number, updatePartnerDto: UpdatePartnerDto) {
    const partner = await this.partnerRepository.findOne({
      where: { id },
    });
    if (!partner) throw new NotFoundException('This Partner not found');
    return await this.partnerRepository.update(id, updatePartnerDto);
  }

  async remove(id: number) {
    const partner = await this.partnerRepository.findOne({
      where: { id },
    });
    if (!partner) throw new NotFoundException('This Partner not found');
    await this.cloudinaryService.deleteFile(partner.image_id);
    await this.partnerRepository.delete(id);
    return { success: true };
  }
}
