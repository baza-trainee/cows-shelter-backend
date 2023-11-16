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
exports.ExcursionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const excursion_entity_1 = require("./entities/excursion.entity");
let ExcursionsService = class ExcursionsService {
    constructor(excursionsRepository) {
        this.excursionsRepository = excursionsRepository;
    }
    async create(createExcursionDto) {
        const newExcursion = {
            title_en: createExcursionDto.title_en,
            description_en: createExcursionDto.description_en,
            description_ua: createExcursionDto.description_ua,
            amount: createExcursionDto.amount,
            duration: createExcursionDto.duration,
            image_url: createExcursionDto.image_url,
        };
        return await this.excursionsRepository
            .save(newExcursion);
    }
    async findAll() {
        return this.excursionsRepository
            .find({
            order: {
                createdAt: 'DESC',
            },
        });
    }
    async findOne(id) {
        return this.excursionsRepository
            .find({
            order: {
                createdAt: 'DESC',
            },
        });
    }
    async update(id, updateExcursionDto) {
        const excursion = await this.excursionsRepository
            .findOne({
            where: {
                id
            },
        });
        if (!excursion)
            throw new common_1.NotFoundException('This excursion not found');
        return await this.excursionsRepository
            .update(id, updateExcursionDto);
    }
    async remove(id) {
        const excursion = await this.excursionsRepository
            .findOne({
            where: {
                id
            },
        });
        if (!excursion)
            throw new common_1.NotFoundException('This excursion not found');
        await this.excursionsRepository
            .delete(id);
        return {
            success: true
        };
    }
};
exports.ExcursionsService = ExcursionsService;
exports.ExcursionsService = ExcursionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(excursion_entity_1.Excursion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExcursionsService);
//# sourceMappingURL=excursions.service.js.map