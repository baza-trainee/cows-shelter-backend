import { Controller, Post, Body } from '@nestjs/common';
import { PasswordService } from './password.service';
import { JwtService } from '@nestjs/jwt';
import { MailingService } from 'src/mailing/mailing.service';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('password')
export class PasswordController {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
    private readonly mailingService: MailingService,
  ) {}

  @Post('forgot')
  async forgotPassword(@Body('email') email: string) {
    return this.passwordService.sendMail(email);
  }

  @Post('reset')
  resetPassword(
    @Body('token') token: string,
    @Body('password') password: string,
    @Body('confirm_password') confirm_password: string,
  ) {
    return this.passwordService.resetPassword(
      token,
      password,
      confirm_password,
    );
  }
}
