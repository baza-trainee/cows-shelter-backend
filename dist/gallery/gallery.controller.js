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
exports.GalleryController = void 0;
const common_1 = require("@nestjs/common");
const gallery_service_1 = require("./gallery.service");
const create_gallery_dto_1 = require("./dto/create-gallery.dto");
const swagger_1 = require("@nestjs/swagger");
const gallery_entity_1 = require("./entities/gallery.entity");
const types_1 = require("../types");
const platform_express_1 = require("@nestjs/platform-express");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let GalleryController = class GalleryController {
    constructor(galleryService, cloudinaryService) {
        this.galleryService = galleryService;
        this.cloudinaryService = cloudinaryService;
    }
    findAllWithPagination(req, page = 1, limit = 2) {
        return this.galleryService.findAllWithPagination(+page, +limit);
    }
    create(createGalleryDto) {
        return this.galleryService.create(createGalleryDto);
    }
    findAll() {
        return this.galleryService.findAll();
    }
    findOne(id) {
        return this.galleryService.findOne(+id);
    }
    remove(id) {
        return this.galleryService.remove(+id);
    }
    async uploadFile(file) {
        return await this.cloudinaryService
            .uploadFile(file, 'images')
            .then((data) => {
            return {
                statusCode: 200,
                image_url: data.secure_url,
            };
        })
            .catch((err) => {
            return {
                statusCode: 400,
                message: err.message,
            };
        });
    }
};
exports.GalleryController = GalleryController;
__decorate([
    (0, common_1.Get)('pagination'),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'get all images', type: [gallery_entity_1.Gallery] }),
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
], GalleryController.prototype, "findAllWithPagination", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: create_gallery_dto_1.CreateGalleryDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'create gallery', type: gallery_entity_1.Gallery }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'internal server error',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gallery_dto_1.CreateGalleryDto]),
    __metadata("design:returntype", void 0)
], GalleryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'get all images', type: [gallery_entity_1.Gallery] }),
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
], GalleryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'get  image by id', type: gallery_entity_1.Gallery }),
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
], GalleryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'delete image' }),
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
], GalleryController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'upload image',
        type: types_1.UploadImageResponse,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'internal server error',
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
            new common_1.FileTypeValidator({ fileType: '.(png|jpg|jpeg|webp)' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "uploadFile", null);
exports.GalleryController = GalleryController = __decorate([
    (0, swagger_1.ApiTags)('Gallery'),
    (0, common_1.Controller)('gallery'),
    __metadata("design:paramtypes", [gallery_service_1.GalleryService,
        cloudinary_service_1.CloudinaryService])
], GalleryController);
//# sourceMappingURL=gallery.controller.js.map