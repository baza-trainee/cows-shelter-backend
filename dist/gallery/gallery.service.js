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
exports.GalleryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const gallery_entity_1 = require("./entities/gallery.entity");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let GalleryService = class GalleryService {
    constructor(galleryRepository, cloudinaryService) {
        this.galleryRepository = galleryRepository;
        this.cloudinaryService = cloudinaryService;
    }
    async create(createGalleryDto) {
        return await this.galleryRepository.save(createGalleryDto);
    }
    async findAll() {
        const images = await this.galleryRepository.find({
            order: {
                createdAt: 'DESC',
            },
        });
        return images;
    }
    async findOne(id) {
        const image = await this.galleryRepository.findOne({
            where: { id },
        });
        if (!image)
            throw new common_1.NotFoundException('image not found');
        return image;
    }
    async remove(id) {
        const image = await this.galleryRepository.findOne({
            where: { id },
        });
        if (!image)
            throw new common_1.NotFoundException('image not found');
        await this.cloudinaryService.deleteFile(image.image_id);
        await this.galleryRepository.delete(id);
        return { success: true };
    }
    async findAllWithPagination(page, limit) {
        const images = await this.galleryRepository.find({
            order: {
                createdAt: 'DESC',
            },
            take: limit,
            skip: (page - 1) * limit,
        });
        return images;
    }
};
exports.GalleryService = GalleryService;
exports.GalleryService = GalleryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gallery_entity_1.Gallery)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cloudinary_service_1.CloudinaryService])
], GalleryService);
//# sourceMappingURL=gallery.service.js.map