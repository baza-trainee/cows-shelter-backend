import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PartnersModule } from './partners/partners.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DB_URL'),
        synchronize: true,
        logging: true,
        entities: [__dirname + '/**/*.entity{.js,.ts}'],
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    PartnersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
