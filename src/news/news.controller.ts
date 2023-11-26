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
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { News } from './entities/news.entity';
import {
  FileType,
  NewsResponse,
  NotFoundResponse,
  UploadImageResponse,
} from 'src/types';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('News')
@Controller('news')
export class NewsController {
  constructor(
    private readonly newsService: NewsService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Get('pagination')
  @ApiResponse({
    status: 201,
    description: 'get all posts by pages',
    type: NewsResponse,
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
    return this.newsService.findAllWithPagination(+page, +limit);
  }

  @Post()
  @ApiBody({
    type: CreateNewsDto,
  })
  @ApiResponse({
    status: 201,
    description: 'create post',
    type: News,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'get all news',
    type: [News],
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
    return this.newsService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'get one post',
    type: News,
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
    return this.newsService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateNewsDto,
  })
  @ApiResponse({
    status: 201,
    description: 'update news',
    type: News,
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
  update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(+id, updateNewsDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'delete news',
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
    return this.newsService.remove(+id);
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
