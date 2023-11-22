import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contacts } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contacts)
    private readonly contactsRepository: Repository<Contacts>,
  ) {}
  async create(createContactDto: CreateContactDto) {
    const newContacts = {
      email: createContactDto.email,
      phone: createContactDto.phone,
    };
    return await this.contactsRepository.save(newContacts);
  }

  async findAll() {
    return this.contactsRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    const contacts = await this.contactsRepository.findOne({
      where: { id },
    });
    if (!contacts) throw new NotFoundException('This contacts not found');
    return await this.contactsRepository.update(id, updateContactDto);
  }

  async remove(id: number) {
    const contacts = await this.contactsRepository.findOne({
      where: { id },
    });
    if (!contacts) throw new NotFoundException('This contacts not found');
    await this.contactsRepository.delete(id);
    return { success: true };
  }
}
