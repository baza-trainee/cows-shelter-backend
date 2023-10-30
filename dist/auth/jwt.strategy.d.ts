import { ConfigService } from '@nestjs/config';
import { IUser } from 'src/types';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(payload: IUser): Promise<{
        id: string;
        username: string;
    }>;
}
export {};
