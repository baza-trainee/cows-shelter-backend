import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreateNewsDto {
  @ApiProperty()
  @IsString()
  title_ua: string;

  @ApiProperty()
  @IsString()
  title_en: string;

  @ApiProperty()
  @IsString()
  content_ua: string;

  @ApiProperty()
  @IsString()
  content_en: string;

  @ApiProperty()
  @IsUrl()
  image_url: string;
}
