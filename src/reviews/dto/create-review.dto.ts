import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty()
  @IsString()
  name_ua: string;

  @ApiProperty()
  @IsString()
  name_en: string;

  @ApiProperty()
  @IsString()
  text_ua: string;

  @ApiProperty()
  @IsString()
  text_en: string;
}
