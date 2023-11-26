import { ApiProperty } from '@nestjs/swagger';
import { Excursion } from 'src/excursions/entities/excursion.entity';
import { Gallery } from 'src/gallery/entities/gallery.entity';
import { News } from 'src/news/entities/news.entity';
import { Partner } from 'src/partners/entities/partner.entity';

export class IUser {
  @ApiProperty()
  id: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  access_token: string;
}

export class NotFoundResponse {
  @ApiProperty({ default: 404 })
  status_code: number;
  @ApiProperty()
  message: string;
}

export class UploadImageResponse {
  @ApiProperty()
  imageUrl: string;
}

export class FileType {
  @ApiProperty()
  file: Express.Multer.File;
}

export class ImageResponse {
  @ApiProperty()
  images: [Gallery];
  @ApiProperty()
  totalLength: number;
}
export class PartnerResponse {
  @ApiProperty()
  partners: [Partner];
  @ApiProperty()
  totalLength: number;
}
export class ExcursionResponse {
  @ApiProperty()
  excursions: [Excursion];
  @ApiProperty()
  totalLength: number;
}
export class NewsResponse {
  @ApiProperty()
  news: [News];
  @ApiProperty()
  totalLength: number;
}
