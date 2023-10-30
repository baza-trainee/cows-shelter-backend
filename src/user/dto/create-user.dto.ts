import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username:string;
  
  @IsEmail()
  email: string;

  @MinLength(5, { message: 'Password must be minimum 5 symbols' })
  password: string;
}
