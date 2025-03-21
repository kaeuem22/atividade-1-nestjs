import { JogoService } from './jogo.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
export declare class JogoController {
    private readonly jogoService;
    constructor(jogoService: JogoService);
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
    findOne(id: string): Promise<{
        nome: string;
        publisher_id: number | null;
        datacriacao: Date;
        dataatualizacao: Date;
        lancamento: Date;
        genero_id: number | null;
        jogo_id: number;
    }>;
    update(id: string, updateJogoDto: UpdateJogoDto): Promise<{
        nome: string;
        publisher_id: number | null;
        datacriacao: Date;
        dataatualizacao: Date;
        lancamento: Date;
        genero_id: number | null;
        jogo_id: number;
    }>;
    remove(id: string): Promise<{
        nome: string;
        publisher_id: number | null;
        datacriacao: Date;
        dataatualizacao: Date;
        lancamento: Date;
        genero_id: number | null;
        jogo_id: number;
    }>;
}
