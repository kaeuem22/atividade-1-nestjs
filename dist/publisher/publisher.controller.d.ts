import { PublisherService } from './publisher.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
export declare class PublisherController {
    private readonly publisherService;
    constructor(publisherService: PublisherService);
    create(createPublisherDto: CreatePublisherDto): Promise<{
        nome: string;
        email: string;
        publisher_id: number;
        datacriacao: Date;
        dataatualizacao: Date;
    }>;
    findAll(): Promise<{
        nome: string;
        email: string;
        publisher_id: number;
        datacriacao: Date;
        dataatualizacao: Date;
    }[]>;
    findOne(id: string): Promise<{
        nome: string;
        email: string;
        publisher_id: number;
        datacriacao: Date;
        dataatualizacao: Date;
    }>;
    update(id: string, updatePublisherDto: UpdatePublisherDto): Promise<{
        nome: string;
        email: string;
        publisher_id: number;
        datacriacao: Date;
        dataatualizacao: Date;
    }>;
    remove(id: string): Promise<{
        nome: string;
        email: string;
        publisher_id: number;
        datacriacao: Date;
        dataatualizacao: Date;
    }>;
}
