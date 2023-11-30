import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
export declare class ReviewsService {
    private readonly reviewRepository;
    constructor(reviewRepository: Repository<Review>);
    create(createReviewDto: CreateReviewDto): Promise<CreateReviewDto & Review>;
    findAll(): Promise<Review[]>;
    findOne(id: number): Promise<Review>;
    update(id: number, updateReviewDto: UpdateReviewDto): Promise<{
        success: boolean;
    }>;
    remove(id: number): Promise<{
        success: boolean;
    }>;
    findAllWithPagination(page: number, limit: number): Promise<{
        reviews: Review[];
        totalLength: number;
    }>;
}
