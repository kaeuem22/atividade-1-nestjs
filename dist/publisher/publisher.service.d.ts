import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PublisherService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(publisher_id: number): Promise<{
        nome: string;
        email: string;
        publisher_id: number;
        datacriacao: Date;
        dataatualizacao: Date;
    }>;
    update(publisher_id: number, updatePublisherDto: UpdatePublisherDto): Promise<{
        nome: string;
        email: string;
        publisher_id: number;
        datacriacao: Date;
        dataatualizacao: Date;
    }>;
    remove(publisher_id: number): Promise<{
        nome: string;
        email: string;
        publisher_id: number;
        datacriacao: Date;
        dataatualizacao: Date;
    }>;
}
