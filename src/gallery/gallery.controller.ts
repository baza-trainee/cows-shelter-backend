import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Req,
  Query,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { Gallery } from './entities/gallery.entity';
import { NotFoundResponse, UploadImageResponse } from '../types';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Controller('gallery')
export class GalleryController {
  constructor(
    private readonly galleryService: GalleryService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Get('pagination')
  @ApiResponse({ status: 201, description: 'get all images', type: [Gallery] })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  findAllWithPagination(
    @Req() req,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 2,
  ) {
    return this.galleryService.findAllWithPagination(+page, +limit);
  }

  @Post()
  @ApiBody({ type: CreateGalleryDto })
  @ApiResponse({ status: 201, description: 'create gallery', type: Gallery })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  create(@Body() createGalleryDto: CreateGalleryDto) {
    return this.galleryService.create(createGalleryDto);
  }

  @Get()
  @ApiResponse({ status: 201, description: 'get all images', type: [Gallery] })
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
    return this.galleryService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 201, description: 'get  image by id', type: Gallery })
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
    return this.galleryService.findOne(+id);
  }

  @Delete(':id')
  @ApiResponse({ status: 201, description: 'delete image' })
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
    return this.galleryService.remove(+id);
  }

  @Post('upload')
  @ApiResponse({
    status: 201,
    description: 'upload image',
    type: UploadImageResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
          new FileTypeValidator({ fileType: '.(png|jpg|jpeg|webp)' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ): Promise<any> {
    return await this.cloudinaryService
      .uploadFile(file, 'images')
      .then((data) => {
        return {
          statusCode: 200,
          image_url: data.secure_url,
        };
      })
      .catch((err) => {
        return {
          statusCode: 400,
          message: err.message,
        };
      });
  }
}
