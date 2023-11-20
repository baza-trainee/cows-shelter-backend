import { PasswordService } from './password.service';
import { JwtService } from '@nestjs/jwt';
import { MailingService } from '../mailing/mailing.service';
import { MailerService } from '@nestjs-modules/mailer';
export declare class PasswordController {
    private readonly passwordService;
    private readonly jwtService;
    private readonly mailerService;
    private readonly mailingService;
    constructor(passwordService: PasswordService, jwtService: JwtService, mailerService: MailerService, mailingService: MailingService);
    forgotPassword(email: string): Promise<{
        message: string;
    }>;
    resetPassword(token: string, password: string, confirm_password: string): Promise<{
        success: boolean;
    }>;
}
