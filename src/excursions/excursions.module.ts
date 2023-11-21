import { Module } from '@nestjs/common';
import { ExcursionsService } from './excursions.service';
import { ExcursionsController } from './excursions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Excursion } from './entities/excursion.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  imports: [TypeOrmModule.forFeature([Excursion])],
  controllers: [ExcursionsController],
  providers: [ExcursionsService, CloudinaryService],
})
export class ExcursionsModule {}
