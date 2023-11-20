"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordModule = void 0;
const common_1 = require("@nestjs/common");
const password_service_1 = require("./password.service");
const password_controller_1 = require("./password.controller");
const typeorm_1 = require("@nestjs/typeorm");
const password_entity_1 = require("./entities/password.entity");
const mailer_1 = require("@nestjs-modules/mailer");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const mailing_module_1 = require("../mailing/mailing.module");
const mailing_service_1 = require("../mailing/mailing.service");
const user_module_1 = require("../user/user.module");
let PasswordModule = class PasswordModule {
};
exports.PasswordModule = PasswordModule;
exports.PasswordModule = PasswordModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([password_entity_1.Password]),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: '30d' },
                }),
                inject: [config_1.ConfigService],
            }),
            mailer_1.MailerModule.forRoot({
                transport: 'smtps://user@domain.com:pass@smtp.domain.com',
                defaults: {
                    from: 'Здраве Життя',
                },
            }),
            mailing_module_1.MailingModule,
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
        ],
        controllers: [password_controller_1.PasswordController],
        providers: [password_service_1.PasswordService, mailing_service_1.MailingService],
    })
], PasswordModule);
//# sourceMappingURL=password.module.js.map