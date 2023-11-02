import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        id: string;
        email: string;
        access_token: string;
    }>;
    getProfile(req: any): any;
}
