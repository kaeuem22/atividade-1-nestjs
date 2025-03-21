import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class GeneroService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createGeneroDto: CreateGeneroDto): Promise<{
        nome: string;
        datacriacao: Date;
        dataatualizacao: Date;
        genero_id: number;
    }>;
    findAll(): Promise<{
        nome: string;
        datacriacao: Date;
        dataatualizacao: Date;
        genero_id: number;
    }[]>;
    findOne(genero_id: number): Promise<{
        nome: string;
        datacriacao: Date;
        dataatualizacao: Date;
        genero_id: number;
    }>;
    update(genero_id: number, updateGeneroDto: UpdateGeneroDto): Promise<{
        nome: string;
        datacriacao: Date;
        dataatualizacao: Date;
        genero_id: number;
    }>;
    remove(genero_id: number): Promise<{
        nome: string;
        datacriacao: Date;
        dataatualizacao: Date;
        genero_id: number;
    }>;
}
