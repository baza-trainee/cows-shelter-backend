import { IsString, IsEmail, IsUrl } from 'class-validator';

export class CreatePartnerDto {
  @IsString()
  name: string;

  @IsEmail()
  logo: string;

  @IsUrl(undefined, { message: 'URL is not valid.' })
  link: string;
}
