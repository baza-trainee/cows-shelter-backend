import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    create(createContactDto: CreateContactDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateContactDto: UpdateContactDto): string;
    remove(id: string): string;
}
