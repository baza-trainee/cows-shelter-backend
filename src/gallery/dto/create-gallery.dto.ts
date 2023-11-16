import { ApiProperty } from '@nestjs/swagger';
import { IsUrl } from 'class-validator';

export class CreateGalleryDto {
  @ApiProperty()
  @IsUrl()
  image_url: string;
}
