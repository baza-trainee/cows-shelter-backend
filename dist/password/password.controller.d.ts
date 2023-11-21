import { PasswordService } from './password.service';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
export declare class PasswordController {
    private readonly passwordService;
    constructor(passwordService: PasswordService);
    forgotPassword(email: string): Promise<{
        message: string;
    }>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<{
        success: boolean;
    }>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<{
        success: boolean;
    }>;
}
