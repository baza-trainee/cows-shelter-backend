import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import {CreatePdfDto} from "./dto/create-pdf.dto";

@Injectable()
export class PdfService {

  constructor(
      @InjectRepository(Review)
      private readonly pdfRepository: Repository<Pdf>,
  ) {}
  async create(createPdfDto: CreatePdfDto) {
    const newPdf = {
      title: CreatePdfDto.title,
      document_url: CreatePdfDto.document_url,
    };
    return await this.pdfRepository.save(newPdf);
  }

  findAll() {
    return `This action returns all pdf`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pdf`;
  }

  update(id: number, updatePdfDto: UpdatePdfDto) {
    return `This action updates a #${id} pdf`;
  }

  remove(id: number) {
    return `This action removes a #${id} pdf`;
  }
}
