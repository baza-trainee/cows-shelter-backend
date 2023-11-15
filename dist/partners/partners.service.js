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
exports.PartnersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const partner_entity_1 = require("./entities/partner.entity");
const typeorm_2 = require("@nestjs/typeorm");
let PartnersService = class PartnersService {
    constructor(partnerRepository) {
        this.partnerRepository = partnerRepository;
    }
    async create(createPartnerDto) {
        const isExist = await this.partnerRepository.findOne({
            where: {
                link: createPartnerDto.link,
            },
        });
        if (isExist)
            throw new common_1.BadRequestException('Цей Партнер вже існує');
        const newPartner = {
            name: createPartnerDto.name,
            logo: createPartnerDto.logo,
            link: createPartnerDto.link,
        };
        return await this.partnerRepository.save(newPartner);
    }
    async findAll() {
        return await this.partnerRepository.find();
    }
    async update(id, updatePartnerDto) {
        const partner = await this.partnerRepository.findOne({
            where: { id },
        });
        if (!partner)
            throw new common_1.NotFoundException('This Partner not found');
        return await this.partnerRepository.update(id, updatePartnerDto);
    }
    async remove(id) {
        const partner = await this.partnerRepository.findOne({
            where: { id },
        });
        if (!partner)
            throw new common_1.NotFoundException('This Partner not found');
        return await this.partnerRepository.delete(id);
    }
};
exports.PartnersService = PartnersService;
exports.PartnersService = PartnersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(partner_entity_1.Partner)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PartnersService);
//# sourceMappingURL=partners.service.js.map