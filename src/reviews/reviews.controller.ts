import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import {
  ApiBody,
  ApiResponse
} from '@nestjs/swagger';
import { Review } from './entities/review.entity';
import { NotFoundResponse } from 'src/types';

@Controller('reviews')
export class ReviewsController {
  constructor(
      private readonly reviewsService: ReviewsService
  ) {}

  @Post()
  @ApiBody({
    type: CreateReviewDto
  })
  @ApiResponse({
    status: 201,
    description: 'create review',
    type: Review
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService
        .create(createReviewDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'get all reviews',
    type: [Review]
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
    return this.reviewsService
        .findAll();
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateReviewDto
  })
  @ApiResponse({
    status: 201,
    description: 'update review',
    type: Review
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
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService
        .update(+id, updateReviewDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'delete review'
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
    return this.reviewsService
        .remove(+id);
  }
}
