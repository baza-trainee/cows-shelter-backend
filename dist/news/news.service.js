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
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const news_entity_1 = require("./entities/news.entity");
let NewsService = class NewsService {
    constructor(newsRepository) {
        this.newsRepository = newsRepository;
    }
    async create(createNewsDto) {
        const newNews = {
            title_en: createNewsDto.title_en,
            title_ua: createNewsDto.title_ua,
            content_en: createNewsDto.content_en,
            content_ua: createNewsDto.content_ua,
            image_url: createNewsDto.image_url,
        };
        return await this.newsRepository
            .save(newNews);
    }
    async findAll() {
        return this.newsRepository
            .find({
            order: {
                createdAt: 'DESC',
            },
        });
    }
    async findOne(number) {
        return this.newsRepository
            .find({
            order: {
                createdAt: 'DESC',
            },
        });
    }
    async update(id, updateNewsDto) {
        const news = await this.newsRepository
            .findOne({
            where: { id },
        });
        if (!news)
            throw new common_1.NotFoundException('This news not found');
        return await this.newsRepository
            .update(id, updateNewsDto);
    }
    async remove(id) {
        const news = await this.newsRepository
            .findOne({
            where: { id },
        });
        if (!news)
            throw new common_1.NotFoundException('This news not found');
        await this.newsRepository
            .delete(id);
        return { success: true };
    }
};
exports.NewsService = NewsService;
exports.NewsService = NewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(news_entity_1.News)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NewsService);
//# sourceMappingURL=news.service.js.map