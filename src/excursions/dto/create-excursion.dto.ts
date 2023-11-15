import { IsString, IsUrl } from 'class-validator';

export class CreateExcursionDto {
  @IsString()
  title_ua: string;

  @IsString()
  title_en: string;

  @IsString()
  description_ua: string;

  @IsString()
  description_en: string;

  @IsString()
  amount: string;

  @IsString()
  duration: string;

  @IsUrl()
  image_url: string;
}
