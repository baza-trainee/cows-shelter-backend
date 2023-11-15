import { IsString } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  email: string;

  @IsString()
  phone: string;
}
