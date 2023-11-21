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
exports.ExcursionsController = void 0;
const common_1 = require("@nestjs/common");
const excursions_service_1 = require("./excursions.service");
const create_excursion_dto_1 = require("./dto/create-excursion.dto");
const update_excursion_dto_1 = require("./dto/update-excursion.dto");
const swagger_1 = require("@nestjs/swagger");
const excursion_entity_1 = require("./entities/excursion.entity");
const types_1 = require("../types");
const platform_express_1 = require("@nestjs/platform-express");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let ExcursionsController = class ExcursionsController {
    constructor(excursionsService, cloudinaryService) {
        this.excursionsService = excursionsService;
        this.cloudinaryService = cloudinaryService;
    }
    findAllWithPagination(req, page = 1, limit = 2) {
        return this.excursionsService.findAllWithPagination(+page, +limit);
    }
    create(createExcursionDto) {
        return this.excursionsService.create(createExcursionDto);
    }
    findAll() {
        return this.excursionsService.findAll();
    }
    findOne(id) {
        return this.excursionsService.findOne(+id);
    }
    update(id, updateExcursionDto) {
        return this.excursionsService.update(+id, updateExcursionDto);
    }
    remove(id) {
        return this.excursionsService.remove(+id);
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
exports.ExcursionsController = ExcursionsController;
__decorate([
    (0, common_1.Get)('pagination'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'get all posts by pages',
        type: [excursion_entity_1.Excursion],
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
], ExcursionsController.prototype, "findAllWithPagination", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({
        type: create_excursion_dto_1.CreateExcursionDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'create excursion',
        type: excursion_entity_1.Excursion,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'internal server error',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_excursion_dto_1.CreateExcursionDto]),
    __metadata("design:returntype", void 0)
], ExcursionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'get all excursions',
        type: [excursion_entity_1.Excursion],
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
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExcursionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'get single excursion',
        type: excursion_entity_1.Excursion,
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
], ExcursionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBody)({
        type: update_excursion_dto_1.UpdateExcursionDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'update review',
        type: excursion_entity_1.Excursion,
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
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_excursion_dto_1.UpdateExcursionDto]),
    __metadata("design:returntype", void 0)
], ExcursionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'delete review',
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
], ExcursionsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, swagger_1.ApiBody)({
        type: types_1.FileType,
    }),
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
], ExcursionsController.prototype, "uploadFile", null);
exports.ExcursionsController = ExcursionsController = __decorate([
    (0, swagger_1.ApiTags)('Excursions'),
    (0, common_1.Controller)('excursions'),
    __metadata("design:paramtypes", [excursions_service_1.ExcursionsService,
        cloudinary_service_1.CloudinaryService])
], ExcursionsController);
//# sourceMappingURL=excursions.controller.js.map