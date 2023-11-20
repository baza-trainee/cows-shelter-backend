import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    readonly userRepository: Repository<User>;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    create(createUserDto: CreateUserDto): Promise<{
        user: {
            email: string;
            password: string;
        } & User;
        token: string;
    }>;
    findOne(email: string): Promise<User>;
    updateUser(id: number, data: any): Promise<any>;
}
