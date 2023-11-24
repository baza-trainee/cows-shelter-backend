import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Repository } from 'typeorm';
import { Contacts } from './entities/contact.entity';
export declare class ContactsService {
    private readonly contactsRepository;
    constructor(contactsRepository: Repository<Contacts>);
    create(createContactDto: CreateContactDto): Promise<CreateContactDto & Contacts>;
    findAll(): Promise<Contacts[]>;
    update(id: number, updateContactDto: UpdateContactDto): Promise<{
        success: boolean;
    }>;
    remove(id: number): Promise<{
        success: boolean;
    }>;
}
