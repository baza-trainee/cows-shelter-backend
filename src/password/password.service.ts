import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Password } from './entities/password.entity';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { JwtService } from '@nestjs/jwt';
import { MailingService } from 'src/mailing/mailing.service';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2';

@Injectable()
export class PasswordService {
  constructor(
    @InjectRepository(Password)
    private readonly passwordRepository: Repository<Password>,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
    private readonly mailingService: MailingService,
  ) {}

  async createToken(body: any) {
    return await this.passwordRepository.save(body);
  }

  public async sendMail(email: string) {
    const token = this.jwtService.sign({ email });
    await this.createToken({
      email,
      token,
    });

    const url = `http://localhost:3000/reset/${token}`;

    await this.mailingService.setTransport();
    this.mailerService
      .sendMail({
        transporterName: 'gmail',
        to: email,
        from: 'zdravejuttya.com',
        subject: 'Reset your password',
        html: `Click <a href="${url}">here<a/> to reset your password`,
        context: {
          code: '38320',
        },
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });

    return {
      message: 'Check your email',
    };
  }

  async findOne(data: any) {
    this.passwordRepository.findOne(data);
  }

  public async resetPassword(
    token: string,
    password: string,
    confirm_password: string,
  ) {
    if (password !== confirm_password) {
      throw new BadRequestException('Passwords do not match');
    }
    const passwordReset: any = await this.findOne({ token });

    const user = await this.userService.findOne(passwordReset.email);

    if (!user) throw new NotFoundException('User Not Found');

    const hashedPassword = await argon2.hash(password);

    await this.userService.updateUser(user.id, { password: hashedPassword });

    return { success: true };
  }
}
