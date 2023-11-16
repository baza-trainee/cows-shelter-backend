import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { Partner } from './entities/partner.entity';
import { NotFoundResponse } from 'src/types';

@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Post()
  @ApiBody({ type: CreatePartnerDto })
  @ApiResponse({ status: 201, description: 'create partner', type: Partner })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  create(@Body() createPartnerDto: CreatePartnerDto) {
    return this.partnersService.create(createPartnerDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'get all partners',
    type: [Partner],
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  findAll() {
    return this.partnersService.findAll();
  }

  @Patch(':id')
  @ApiResponse({
    status: 201,
    description: 'update partner',
    type: Partner,
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  update(@Param('id') id: string, @Body() updatePartnerDto: UpdatePartnerDto) {
    return this.partnersService.update(+id, updatePartnerDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 201, description: 'delete partner' })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  remove(@Param('id') id: string) {
    return this.partnersService.remove(+id);
  }
}
