import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
export declare class ReviewsService {
    private readonly reviewRepository;
    constructor(reviewRepository: Repository<Review>);
    create(createReviewDto: CreateReviewDto): Promise<CreateReviewDto & Review>;
    findAll(): Promise<Review[]>;
    update(id: number, updateReviewDto: UpdateReviewDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        success: boolean;
    }>;
}
