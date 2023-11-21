import { Password } from './entities/password.entity';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { JwtService } from '@nestjs/jwt';
import { MailingService } from '../mailing/mailing.service';
import { UserService } from '../user/user.service';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { CreatePasswordDto } from './dto/create-password.dto';
export declare class PasswordService {
    private readonly passwordRepository;
    private readonly userService;
    private readonly jwtService;
    private readonly mailerService;
    private readonly mailingService;
    constructor(passwordRepository: Repository<Password>, userService: UserService, jwtService: JwtService, mailerService: MailerService, mailingService: MailingService);
    createRecord(createPasswordDto: CreatePasswordDto): Promise<CreatePasswordDto & Password>;
    sendMail(email: string): Promise<{
        message: string;
    }>;
    findOne(data: any): Promise<void>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<{
        success: boolean;
    }>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<{
        success: boolean;
    }>;
}
