import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { UpdatePdfDto } from './dto/update-pdf.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PDF } from './entities/pdf.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class PdfService {
  constructor(
    @InjectRepository(PDF)
    private readonly pdfRepository: Repository<PDF>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(createPdfDto: CreatePdfDto) {
    return await this.pdfRepository.save(createPdfDto);
  }

  async findAll() {
    return this.pdfRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    const document = await this.pdfRepository.findOne({
      where: { id },
    });
    if (!document) throw new NotFoundException('image not found');
    return document;
  }

  async update(id: number, updatePdfDto: UpdatePdfDto) {
    const pdf = await this.pdfRepository.findOne({
      where: {
        id,
      },
    });
    if (!pdf) throw new NotFoundException('This pdf document not found');
    return await this.pdfRepository.update(id, updatePdfDto);
  }

  async remove(id: number) {
    const pdf = await this.pdfRepository.findOne({
      where: {
        id,
      },
    });
    if (!pdf) throw new NotFoundException('This pdf document not found');
    await this.cloudinaryService.deleteFile(pdf.document_id);
    await this.pdfRepository.delete(id);
    return {
      success: true,
    };
  }
}
