import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    const isPasswordsMatch = await argon2.verify(user.password, password);

    if (user && isPasswordsMatch) {
      return user;
    }

    throw new BadRequestException({ message: 'Email or password is invalid' });
  }

  async login(user: IUser) {
    const { id, email } = user;
    return {
      id,
      email,
      access_token: this.jwtService.sign({ id: user.id, email: user.email }),
    };
  }
}
