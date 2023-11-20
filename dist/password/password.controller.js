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
exports.PasswordController = void 0;
const common_1 = require("@nestjs/common");
const password_service_1 = require("./password.service");
const jwt_1 = require("@nestjs/jwt");
const mailing_service_1 = require("../mailing/mailing.service");
const mailer_1 = require("@nestjs-modules/mailer");
let PasswordController = class PasswordController {
    constructor(passwordService, jwtService, mailerService, mailingService) {
        this.passwordService = passwordService;
        this.jwtService = jwtService;
        this.mailerService = mailerService;
        this.mailingService = mailingService;
    }
    async forgotPassword(email) {
        return this.passwordService.sendMail(email);
    }
    resetPassword(token, password, confirm_password) {
        return this.passwordService.resetPassword(token, password, confirm_password);
    }
};
exports.PasswordController = PasswordController;
__decorate([
    (0, common_1.Post)('forgot'),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PasswordController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('reset'),
    __param(0, (0, common_1.Body)('token')),
    __param(1, (0, common_1.Body)('password')),
    __param(2, (0, common_1.Body)('confirm_password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], PasswordController.prototype, "resetPassword", null);
exports.PasswordController = PasswordController = __decorate([
    (0, common_1.Controller)('password'),
    __metadata("design:paramtypes", [password_service_1.PasswordService,
        jwt_1.JwtService,
        mailer_1.MailerService,
        mailing_service_1.MailingService])
], PasswordController);
//# sourceMappingURL=password.controller.js.map