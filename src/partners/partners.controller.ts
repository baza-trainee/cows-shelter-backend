import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  UploadedFile,
  UseInterceptors,
  Query,
  Req,
} from '@nestjs/common';
import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Partner } from './entities/partner.entity';
import {
  FileType,
  NotFoundResponse,
  PartnerResponse,
  UploadImageResponse,
} from '../types';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Partners')
@Controller('partners')
export class PartnersController {
  constructor(
    private readonly partnersService: PartnersService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Get('pagination')
  @ApiResponse({
    status: 201,
    description: 'get all partners with pagination',
    type: PartnerResponse,
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
  findAllWithPagination(
    @Req() req,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 2,
  ) {
    return this.partnersService.findAllWithPagination(+page, +limit);
  }

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

  @Post('upload')
  @ApiBody({
    type: FileType,
  })
  @ApiResponse({
    status: 201,
    description: 'upload image',
    type: UploadImageResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 }), //1mb
          new FileTypeValidator({ fileType: '.(png|jpg|jpeg|webp)' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ): Promise<any> {
    return await this.cloudinaryService
      .uploadFile(file, 'logo')
      .then((data) => {
        return {
          statusCode: 200,
          image_url: data.secure_url,
          image_id: data.public_id,
        };
      })
      .catch((err) => {
        return {
          statusCode: 400,
          message: err.message,
        };
      });
  }
}
