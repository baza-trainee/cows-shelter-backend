"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const review_entity_1 = require("./entities/review.entity");
let ReviewsService = class ReviewsService {
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    async create(createReviewDto) {
        const newReview = {
            name_ua: createReviewDto.name_ua,
            name_en: createReviewDto.name_en,
            text_ua: createReviewDto.text_ua,
            text_en: createReviewDto.text_en,
        };
        return await this.reviewRepository.save(newReview);
    }
    async findAll() {
        return this.reviewRepository.find({
            order: {
                createdAt: 'DESC',
            },
        });
    }
    async update(id, updateReviewDto) {
        const review = await this.reviewRepository.findOne({
            where: { id },
        });
        if (!review)
            throw new common_1.NotFoundException('This review not found');
        return await this.reviewRepository.update(id, updateReviewDto);
    }
    async remove(id) {
        const review = await this.reviewRepository.findOne({
            where: { id },
        });
        if (!review)
            throw new common_1.NotFoundException('This review not found');
        await this.reviewRepository.delete(id);
        return { success: true };
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(review_entity_1.Review)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map