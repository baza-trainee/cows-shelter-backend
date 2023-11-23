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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Excursion = void 0;
const typeorm_1 = require("typeorm");
let Excursion = class Excursion {
};
exports.Excursion = Excursion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Excursion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Excursion.prototype, "title_en", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Excursion.prototype, "title_ua", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Excursion.prototype, "description_en", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Excursion.prototype, "description_ua", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Excursion.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Excursion.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Excursion.prototype, "image_url", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Excursion.prototype, "createdAt", void 0);
exports.Excursion = Excursion = __decorate([
    (0, typeorm_1.Entity)({ name: 'Excursion' })
], Excursion);
//# sourceMappingURL=excursion.entity.js.map