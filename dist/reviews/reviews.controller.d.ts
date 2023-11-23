import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(createReviewDto: CreateReviewDto): Promise<{
        name_ua: string;
        name_en: string;
        text_ua: string;
        text_en: string;
    } & Review>;
    findAll(): Promise<Review[]>;
    update(id: string, updateReviewDto: UpdateReviewDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
