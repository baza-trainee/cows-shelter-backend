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
exports.PdfService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pdf_entity_1 = require("./entities/pdf.entity");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let PdfService = class PdfService {
    constructor(pdfRepository, cloudinaryService) {
        this.pdfRepository = pdfRepository;
        this.cloudinaryService = cloudinaryService;
    }
    async create(createPdfDto) {
        return await this.pdfRepository.save(createPdfDto);
    }
    async findAll() {
        return this.pdfRepository.find({
            order: {
                createdAt: 'DESC',
            },
        });
    }
    async findOne(id) {
        const document = await this.pdfRepository.findOne({
            where: { id },
        });
        if (!document)
            throw new common_1.NotFoundException('image not found');
        return document;
    }
    async update(id, updatePdfDto) {
        const pdf = await this.pdfRepository.findOne({
            where: {
                id,
            },
        });
        if (!pdf)
            throw new common_1.NotFoundException('This pdf document not found');
        return await this.pdfRepository.update(id, updatePdfDto);
    }
    async remove(id) {
        const pdf = await this.pdfRepository.findOne({
            where: {
                id,
            },
        });
        if (!pdf)
            throw new common_1.NotFoundException('This pdf document not found');
        await this.cloudinaryService.deleteFile(pdf.document_id);
        await this.pdfRepository.delete(id);
        return {
            success: true,
        };
    }
};
exports.PdfService = PdfService;
exports.PdfService = PdfService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pdf_entity_1.PDF)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cloudinary_service_1.CloudinaryService])
], PdfService);
//# sourceMappingURL=pdf.service.js.map