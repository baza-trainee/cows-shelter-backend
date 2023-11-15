import { IsString, IsUrl } from 'class-validator';

export class CreatePdfDto {
  @IsString()
  title: string;

  @IsUrl()
  document_url: string;
}
