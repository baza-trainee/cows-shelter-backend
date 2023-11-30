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
exports.ReviewsController = void 0;
const common_1 = require("@nestjs/common");
const reviews_service_1 = require("./reviews.service");
const create_review_dto_1 = require("./dto/create-review.dto");
const update_review_dto_1 = require("./dto/update-review.dto");
const swagger_1 = require("@nestjs/swagger");
const review_entity_1 = require("./entities/review.entity");
const types_1 = require("../types");
let ReviewsController = class ReviewsController {
    constructor(reviewsService) {
        this.reviewsService = reviewsService;
    }
    findAllWithPagination(req, page = 1, limit = 2) {
        return this.reviewsService.findAllWithPagination(+page, +limit);
    }
    create(createReviewDto) {
        return this.reviewsService.create(createReviewDto);
    }
    findAll() {
        return this.reviewsService.findAll();
    }
    findOne(id) {
        return this.reviewsService.findOne(+id);
    }
    update(id, updateReviewDto) {
        return this.reviewsService.update(+id, updateReviewDto);
    }
    remove(id) {
        return this.reviewsService.remove(+id);
    }
};
exports.ReviewsController = ReviewsController;
__decorate([
    (0, common_1.Get)('pagination'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'get all images',
        type: [review_entity_1.Review],
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'not found',
        type: types_1.NotFoundResponse,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'internal server error',
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "findAllWithPagination", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: create_review_dto_1.CreateReviewDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'create review', type: review_entity_1.Review }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'internal server error',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_review_dto_1.CreateReviewDto]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'get all reviews', type: [review_entity_1.Review] }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'not found',
        type: types_1.NotFoundResponse,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'internal server error',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'get single excursion',
        type: review_entity_1.Review,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'not found',
        type: types_1.NotFoundResponse,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'internal server error',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBody)({ type: update_review_dto_1.UpdateReviewDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'update review', type: review_entity_1.Review }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'not found',
        type: types_1.NotFoundResponse,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'internal server error',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_review_dto_1.UpdateReviewDto]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'delete review' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'not found',
        type: types_1.NotFoundResponse,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'internal server error',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "remove", null);
exports.ReviewsController = ReviewsController = __decorate([
    (0, swagger_1.ApiTags)('Reviews'),
    (0, common_1.Controller)('reviews'),
    __metadata("design:paramtypes", [reviews_service_1.ReviewsService])
], ReviewsController);
//# sourceMappingURL=reviews.controller.js.map