import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreatePartnerDto {
  @ApiProperty()
  @IsString()
  name: string;

  @IsString()
  @ApiProperty()
  logo: string;

  @ApiProperty()
  @IsUrl(undefined, { message: 'URL is not valid.' })
  link: string;

  @ApiProperty()
  @IsString()
  image_id: string;
}
