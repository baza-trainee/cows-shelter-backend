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
exports.PdfController = void 0;
const common_1 = require("@nestjs/common");
const pdf_service_1 = require("./pdf.service");
const create_pdf_dto_1 = require("./dto/create-pdf.dto");
const update_pdf_dto_1 = require("./dto/update-pdf.dto");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const types_1 = require("../types");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const pdf_entity_1 = require("./entities/pdf.entity");
let PdfController = class PdfController {
    constructor(pdfService, cloudinaryService) {
        this.pdfService = pdfService;
        this.cloudinaryService = cloudinaryService;
    }
    create(createPdfDto) {
        return this.pdfService.create(createPdfDto);
    }
    findAll() {
        return this.pdfService.findAll();
    }
    findOne(id) {
        return this.pdfService.findOne(+id);
    }
    update(id, updatePdfDto) {
        return this.pdfService.update(+id, updatePdfDto);
    }
    remove(id) {
        return this.pdfService.remove(+id);
    }
    async uploadFile(file) {
        return await this.cloudinaryService
            .uploadFile(file, 'pdf')
            .then((data) => {
            return {
                statusCode: 200,
                document_url: data.secure_url,
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
exports.PdfController = PdfController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({
        type: create_pdf_dto_1.CreatePdfDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'create pdf document',
        type: pdf_entity_1.PDF,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'internal server error',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pdf_dto_1.CreatePdfDto]),
    __metadata("design:returntype", void 0)
], PdfController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'get all pdfs',
        type: [pdf_entity_1.PDF],
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
], PdfController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'get single pdf',
        type: [pdf_entity_1.PDF],
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
], PdfController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBody)({
        type: update_pdf_dto_1.UpdatePdfDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'update pdf',
        type: pdf_entity_1.PDF,
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
    __metadata("design:paramtypes", [String, update_pdf_dto_1.UpdatePdfDto]),
    __metadata("design:returntype", void 0)
], PdfController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'delete pdf',
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
], PdfController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'upload pdf',
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
            new common_1.FileTypeValidator({ fileType: '.(pdf)' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PdfController.prototype, "uploadFile", null);
exports.PdfController = PdfController = __decorate([
    (0, swagger_1.ApiTags)('PDF'),
    (0, common_1.Controller)('pdf'),
    __metadata("design:paramtypes", [pdf_service_1.PdfService,
        cloudinary_service_1.CloudinaryService])
], PdfController);
//# sourceMappingURL=pdf.controller.js.map