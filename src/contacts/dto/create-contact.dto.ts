import { IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  email: string;

  @IsString()
  phone: string;
}
