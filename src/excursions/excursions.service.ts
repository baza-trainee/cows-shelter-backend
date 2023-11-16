import {
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { CreateExcursionDto } from './dto/create-excursion.dto';
import { UpdateExcursionDto } from './dto/update-excursion.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Excursion } from "./entities/excursion.entity";

@Injectable()
export class ExcursionsService {
  constructor(
      @InjectRepository(Excursion)
      private readonly excursionsRepository: Repository<Excursion>,
  ) {}
  async create(createExcursionDto: CreateExcursionDto) {
    const newExcursion = {
      title_en: createExcursionDto.title_en,
      description_en: createExcursionDto.description_en,
      description_ua: createExcursionDto.description_ua,
      amount: createExcursionDto.amount,
      duration: createExcursionDto.duration,
      image_url: createExcursionDto.image_url,
    };
    return await this.excursionsRepository
        .save(newExcursion);
  }

  async findAll() {
    return this.excursionsRepository
        .find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    return this.excursionsRepository
        .find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async update(id: number, updateExcursionDto: UpdateExcursionDto) {
    const excursion = await this.excursionsRepository
        .findOne({
      where: {
        id
      },
    });
    if (!excursion) throw new NotFoundException('This excursion not found');
    return await this.excursionsRepository
        .update(id, updateExcursionDto);
  }

  async remove(id: number) {
    const excursion = await this.excursionsRepository
        .findOne({
      where: {
        id
      },
    });
    if (!excursion) throw new NotFoundException('This excursion not found');
    await this.excursionsRepository
        .delete(id);
    return {
      success: true
    };
  }
}
