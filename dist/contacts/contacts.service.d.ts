import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
export declare class ContactsService {
    create(createContactDto: CreateContactDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateContactDto: UpdateContactDto): string;
    remove(id: number): string;
}
