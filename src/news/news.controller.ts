import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import {
  ApiBody,
  ApiResponse
} from '@nestjs/swagger';
import { News } from './entities/news.entity';
import { NotFoundResponse } from 'src/types';

@Controller('news')
export class NewsController {
  constructor(
      private readonly newsService: NewsService
  ) {}

  @Post()
  @ApiBody({
    type: CreateNewsDto
  })
  @ApiResponse({
    status: 201,
    description: 'create review',
    type: News
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService
        .create(createNewsDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'get all news',
    type: [News]
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
    return this.newsService
        .findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'get all news',
    type: [News]
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
    return this.newsService
        .findOne(+id);
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateNewsDto
  })
  @ApiResponse({
    status: 201,
    description: 'update news',
    type: News
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
    return this.newsService
        .update(+id, updateNewsDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'delete news'
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
    return this.newsService
        .remove(+id);
  }
}
