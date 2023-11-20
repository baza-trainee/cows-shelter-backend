import { Password } from './entities/password.entity';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { JwtService } from '@nestjs/jwt';
import { MailingService } from 'src/mailing/mailing.service';
import { UserService } from 'src/user/user.service';
export declare class PasswordService {
    private readonly passwordRepository;
    private readonly userService;
    private readonly jwtService;
    private readonly mailerService;
    private readonly mailingService;
    constructor(passwordRepository: Repository<Password>, userService: UserService, jwtService: JwtService, mailerService: MailerService, mailingService: MailingService);
    createToken(body: any): Promise<any>;
    sendMail(email: string): Promise<{
        message: string;
    }>;
    findOne(data: any): Promise<void>;
    resetPassword(token: string, password: string, confirm_password: string): Promise<{
        success: boolean;
    }>;
}
