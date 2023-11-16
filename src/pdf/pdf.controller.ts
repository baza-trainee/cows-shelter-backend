import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { PdfService } from './pdf.service';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { UpdatePdfDto } from './dto/update-pdf.dto';
import {
  ApiBody,
  ApiResponse
} from "@nestjs/swagger";
import { PDF } from './entities/pdf.entity';
import { NotFoundResponse } from 'src/types';

@Controller('pdf')
export class PdfController {
  constructor(
      private readonly pdfService: PdfService
  ) {}

  @Post()
  @ApiBody({
    type: CreatePdfDto
  })
  @ApiResponse({
    status: 201,
    description: 'create pdf document',
    type: PDF
  })
  create(
      @Body() createPdfDto: CreatePdfDto
  ) {
    return this.pdfService
        .create(createPdfDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'get all pdfs',
    type: [PDF]
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  findAll() {
    return this.pdfService
        .findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'get single pdf',
    type: [PDF]
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  findOne(@Param('id') id: string) {
    return this.pdfService
        .findOne(+id);
  }

  @Patch(':id')
  @ApiBody({
    type: UpdatePdfDto
  })
  @ApiResponse({
    status: 201,
    description: 'update pdf',
    type: PDF
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  update(@Param('id') id: string, @Body() updatePdfDto: UpdatePdfDto) {
    return this.pdfService
        .update(+id, updatePdfDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'delete pdf'
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  remove(@Param('id') id: string) {
    return this.pdfService
        .remove(+id);
  }
}
