import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Password } from './entities/password.entity';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { JwtService } from '@nestjs/jwt';
import { MailingService } from '../mailing/mailing.service';
import { UserService } from '../user/user.service';
import * as argon2 from 'argon2';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { CreatePasswordDto } from './dto/create-password.dto';

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

  async createRecord(createPasswordDto: CreatePasswordDto) {
    return await this.passwordRepository.save(createPasswordDto);
  }

  async sendMail(email: string) {
    const token = this.jwtService.sign({ email });

    await this.createRecord({
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
      message: 'Перевірте Електронну Пошту',
    };
  }

  async findOne(data: any) {
    this.passwordRepository.findOne(data);
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    const passwordResetData: any = await this.findOne({
      token: resetPasswordDto.token,
    });

    const user = await this.userService.findOne(passwordResetData.email);

    if (!user) throw new NotFoundException('User Not Found');

    const hashedPassword = await argon2.hash(resetPasswordDto.password);

    await this.userService.updateUser(user.id, { password: hashedPassword });

    return { success: true };
  }

  async changePassword(changePasswordDto: ChangePasswordDto) {
    const user = await this.userService.findOne(changePasswordDto.email);

    if (!user) throw new NotFoundException('User Not Found');

    const hashedPassword = await argon2.hash(changePasswordDto.password);

    await this.userService.updateUser(user.id, { password: hashedPassword });

    return { success: true };
  }
}