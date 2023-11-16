import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contacts } from './entities/contact.entity';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    create(createContactDto: CreateContactDto): Promise<{
        email: string;
        phone: string;
    } & Contacts>;
    findAll(): Promise<Contacts[]>;
    findOne(id: string): Promise<Contacts[]>;
    update(id: string, updateContactDto: UpdateContactDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
