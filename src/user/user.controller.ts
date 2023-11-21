import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { IUser, NotFoundResponse } from '../types';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'get all reviews', type: IUser })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 201, description: 'update user', type: IUser })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  update(@Body() email: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updatePassword(email, updateUserDto);
  }
}
