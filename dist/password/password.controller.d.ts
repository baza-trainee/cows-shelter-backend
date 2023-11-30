import { PasswordService } from './password.service';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
export declare class PasswordController {
    private readonly passwordService;
    constructor(passwordService: PasswordService);
    forgotPassword(email: string): Promise<{
        message: string;
    }>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<import("../user/entities/user.entity").User>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<{
        email: string;
        access_token: string;
    }>;
}
