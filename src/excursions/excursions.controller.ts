import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { ExcursionsService } from './excursions.service';
import { CreateExcursionDto } from './dto/create-excursion.dto';
import { UpdateExcursionDto } from './dto/update-excursion.dto';
import {
  ApiBody,
  ApiResponse
} from "@nestjs/swagger";
import { Excursion } from "./entities/excursion.entity";
import { NotFoundResponse } from "../types";

@Controller('excursions')
export class ExcursionsController {
  constructor(
      private readonly excursionsService: ExcursionsService
  ) {}

  @Post()
  @ApiBody({
    type: CreateExcursionDto
  })
  @ApiResponse({
    status: 201,
    description: 'create excursion',
    type: Excursion
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  create(@Body() createExcursionDto: CreateExcursionDto) {
    return this.excursionsService
        .create(createExcursionDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'get all excursions',
    type: [Excursion]
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
    return this.excursionsService
        .findAll();
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'get single excursion',
    type: [Excursion]
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
  findOne(@Param('id') id: string) {
    return this.excursionsService
        .findOne(+id);
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateExcursionDto
  })
  @ApiResponse({
    status: 201,
    description: 'update review',
    type: Excursion
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
  update(@Param('id') id: string, @Body() updateExcursionDto: UpdateExcursionDto) {
    return this.excursionsService
        .update(+id, updateExcursionDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'delete review'
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
  remove(@Param('id') id: string) {
    return this.excursionsService
        .remove(+id);
  }
}
