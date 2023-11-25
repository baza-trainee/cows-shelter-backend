import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  async create(createReviewDto: CreateReviewDto) {
    return await this.reviewRepository.save(createReviewDto);
  }

  async findAll() {
    return this.reviewRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    const review = await this.reviewRepository.findOne({
      where: { id },
    });
    if (!review) throw new NotFoundException('This review not found');
    await this.reviewRepository.update(id, updateReviewDto);
    return { success: true };
  }

  async remove(id: number) {
    const review = await this.reviewRepository.findOne({
      where: { id },
    });
    if (!review) throw new NotFoundException('This review not found');
    await this.reviewRepository.delete(id);
    return { success: true };
  }
}
