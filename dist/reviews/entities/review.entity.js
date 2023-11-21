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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Review = class Review {
};
exports.Review = Review;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Review.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reviewer`s name in ukrainian' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Review.prototype, "name_ua", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reviewer`s name in english' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Review.prototype, "name_en", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Review text  in ukrainian' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Review.prototype, "text_ua", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Review text in english' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Review.prototype, "text_en", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Review.prototype, "createdAt", void 0);
exports.Review = Review = __decorate([
    (0, typeorm_1.Entity)({ name: 'Review' })
], Review);
//# sourceMappingURL=review.entity.js.map