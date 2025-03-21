import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class JogoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createJogoDto: CreateJogoDto): Promise<{
        nome: string;
        publisher_id: number | null;
        datacriacao: Date;
        dataatualizacao: Date;
        lancamento: Date;
        genero_id: number | null;
        jogo_id: number;
    }>;
    findAll(): Promise<{
        nome: string;
        publisher_id: number | null;
        datacriacao: Date;
        dataatualizacao: Date;
        lancamento: Date;
        genero_id: number | null;
        jogo_id: number;
    }[]>;
    findOne(jogo_id: number): Promise<{
        nome: string;
        publisher_id: number | null;
        datacriacao: Date;
        dataatualizacao: Date;
        lancamento: Date;
        genero_id: number | null;
        jogo_id: number;
    }>;
    update(jogo_id: number, updateJogoDto: UpdateJogoDto): Promise<{
        nome: string;
        publisher_id: number | null;
        datacriacao: Date;
        dataatualizacao: Date;
        lancamento: Date;
        genero_id: number | null;
        jogo_id: number;
    }>;
    remove(jogo_id: number): Promise<{
        nome: string;
        publisher_id: number | null;
        datacriacao: Date;
        dataatualizacao: Date;
        lancamento: Date;
        genero_id: number | null;
        jogo_id: number;
    }>;
}
