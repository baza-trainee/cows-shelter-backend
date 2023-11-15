import { IsString } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  name_ua: string;

  @IsString()
  name_en: string;

  @IsString()
  text_ua: string;

  @IsString()
  text_en: string;
}
