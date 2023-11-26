import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Contacts } from './entities/contact.entity';
import { NotFoundResponse } from 'src/types';

@ApiTags('Contacts')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  @ApiBody({
    type: CreateContactDto,
  })
  @ApiResponse({
    status: 201,
    description: 'create contact',
    type: Contacts,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'get all contacts',
    type: [Contacts],
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
    return this.contactsService.findAll();
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateContactDto,
  })
  @ApiResponse({
    status: 201,
    description: 'update contact',
    type: Contacts,
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
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactsService.update(+id, updateContactDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'delete contact',
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
    return this.contactsService.remove(+id);
  }
}
