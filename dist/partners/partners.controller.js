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
exports.PartnersController = void 0;
const common_1 = require("@nestjs/common");
const partners_service_1 = require("./partners.service");
const create_partner_dto_1 = require("./dto/create-partner.dto");
const update_partner_dto_1 = require("./dto/update-partner.dto");
const swagger_1 = require("@nestjs/swagger");
const partner_entity_1 = require("./entities/partner.entity");
const types_1 = require("../types");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const platform_express_1 = require("@nestjs/platform-express");
let PartnersController = class PartnersController {
    constructor(partnersService, cloudinaryService) {
        this.partnersService = partnersService;
        this.cloudinaryService = cloudinaryService;
    }
    findAllWithPagination(req, page = 1, limit = 2) {
        return this.partnersService.findAllWithPagination(+page, +limit);
    }
    create(createPartnerDto) {
        return this.partnersService.create(createPartnerDto);
    }
    findAll() {
        return this.partnersService.findAll();
    }
    update(id, updatePartnerDto) {
        return this.partnersService.update(+id, updatePartnerDto);
    }
    remove(id) {
        return this.partnersService.remove(+id);
    }
    async uploadFile(file) {
        return await this.cloudinaryService
            .uploadFile(file, 'logo')
            .then((data) => {
            return {
                statusCode: 200,
                image_url: data.secure_url,
                image_id: data.public_id,
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
exports.PartnersController = PartnersController;
__decorate([
    (0, common_1.Get)('pagination'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'get all partners with pagination',
        type: [partner_entity_1.Partner],
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
], PartnersController.prototype, "findAllWithPagination", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: create_partner_dto_1.CreatePartnerDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'create partner', type: partner_entity_1.Partner }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'internal server error',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_partner_dto_1.CreatePartnerDto]),
    __metadata("design:returntype", void 0)
], PartnersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'get all partners',
        type: [partner_entity_1.Partner],
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
], PartnersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'update partner',
        type: partner_entity_1.Partner,
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
    __metadata("design:paramtypes", [String, update_partner_dto_1.UpdatePartnerDto]),
    __metadata("design:returntype", void 0)
], PartnersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'delete partner' }),
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
], PartnersController.prototype, "remove", null);
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
            new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
            new common_1.FileTypeValidator({ fileType: '.(png|jpg|jpeg|webp)' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "uploadFile", null);
exports.PartnersController = PartnersController = __decorate([
    (0, swagger_1.ApiTags)('Partners'),
    (0, common_1.Controller)('partners'),
    __metadata("design:paramtypes", [partners_service_1.PartnersService,
        cloudinary_service_1.CloudinaryService])
], PartnersController);
//# sourceMappingURL=partners.controller.js.map