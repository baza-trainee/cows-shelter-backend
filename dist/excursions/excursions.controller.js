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
let ExcursionsController = class ExcursionsController {
    constructor(excursionsService) {
        this.excursionsService = excursionsService;
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
};
exports.ExcursionsController = ExcursionsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_excursion_dto_1.CreateExcursionDto]),
    __metadata("design:returntype", void 0)
], ExcursionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExcursionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExcursionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_excursion_dto_1.UpdateExcursionDto]),
    __metadata("design:returntype", void 0)
], ExcursionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExcursionsController.prototype, "remove", null);
exports.ExcursionsController = ExcursionsController = __decorate([
    (0, common_1.Controller)('excursions'),
    __metadata("design:paramtypes", [excursions_service_1.ExcursionsService])
], ExcursionsController);
//# sourceMappingURL=excursions.controller.js.map