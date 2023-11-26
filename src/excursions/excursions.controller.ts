import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Req,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ExcursionsService } from './excursions.service';
import { CreateExcursionDto } from './dto/create-excursion.dto';
import { UpdateExcursionDto } from './dto/update-excursion.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Excursion } from './entities/excursion.entity';
import {
  ExcursionResponse,
  FileType,
  NotFoundResponse,
  UploadImageResponse,
} from '../types';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@ApiTags('Excursions')
@Controller('excursions')
export class ExcursionsController {
  constructor(
    private readonly excursionsService: ExcursionsService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Get('pagination')
  @ApiResponse({
    status: 201,
    description: 'get all posts by pages',
    type: ExcursionResponse,
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
  findAllWithPagination(
    @Req() req,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 2,
  ) {
    return this.excursionsService.findAllWithPagination(+page, +limit);
  }

  @Post()
  @ApiBody({
    type: CreateExcursionDto,
  })
  @ApiResponse({
    status: 201,
    description: 'create excursion',
    type: Excursion,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  create(@Body() createExcursionDto: CreateExcursionDto) {
    return this.excursionsService.create(createExcursionDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'get all excursions',
    type: [Excursion],
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
    return this.excursionsService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'get single excursion',
    type: Excursion,
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
    return this.excursionsService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateExcursionDto,
  })
  @ApiResponse({
    status: 201,
    description: 'update review',
    type: Excursion,
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
  update(
    @Param('id') id: string,
    @Body() updateExcursionDto: UpdateExcursionDto,
  ) {
    return this.excursionsService.update(+id, updateExcursionDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'delete review',
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
    return this.excursionsService.remove(+id);
  }

  @Post('upload')
  @ApiBody({
    type: FileType,
  })
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
          image_id: data.public_id,
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
