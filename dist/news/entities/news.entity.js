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
exports.News = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let News = class News {
};
exports.News = News;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], News.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Title in Ua' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], News.prototype, "title_en", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Title in En' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], News.prototype, "title_ua", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Text in Ua' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], News.prototype, "content_en", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Text in En' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], News.prototype, "content_ua", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Image Url' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], News.prototype, "image_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Image Id' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], News.prototype, "image_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], News.prototype, "createdAt", void 0);
exports.News = News = __decorate([
    (0, typeorm_1.Entity)({ name: 'News' })
], News);
//# sourceMappingURL=news.entity.js.map