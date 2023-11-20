"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const partners_module_1 = require("./partners/partners.module");
const auth_module_1 = require("./auth/auth.module");
const news_module_1 = require("./news/news.module");
const excursions_module_1 = require("./excursions/excursions.module");
const gallery_module_1 = require("./gallery/gallery.module");
const reviews_module_1 = require("./reviews/reviews.module");
const contacts_module_1 = require("./contacts/contacts.module");
const pdf_module_1 = require("./pdf/pdf.module");
const password_module_1 = require("./password/password.module");
const mailing_module_1 = require("./mailing/mailing.module");
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    url: configService.get('DB_URL'),
                    synchronize: true,
                    logging: true,
                    entities: [__dirname + '/**/*.entity{.js,.ts}'],
                }),
                inject: [config_1.ConfigService],
            }),
            mailer_1.MailerModule.forRoot({
                transport: 'smtps://user@domain.com:pass@smtp.domain.com',
                template: {
                    dir: process.cwd() + '/templates/',
                    adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            partners_module_1.PartnersModule,
            news_module_1.NewsModule,
            excursions_module_1.ExcursionsModule,
            gallery_module_1.GalleryModule,
            reviews_module_1.ReviewsModule,
            contacts_module_1.ContactsModule,
            pdf_module_1.PdfModule,
            password_module_1.PasswordModule,
            mailing_module_1.MailingModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map