import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
export declare class GeneroController {
    private readonly generoService;
    constructor(generoService: GeneroService);
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
    findOne(id: string): Promise<{
        nome: string;
        datacriacao: Date;
        dataatualizacao: Date;
        genero_id: number;
    }>;
    update(id: string, updateGeneroDto: UpdateGeneroDto): Promise<{
        nome: string;
        datacriacao: Date;
        dataatualizacao: Date;
        genero_id: number;
    }>;
    remove(id: string): Promise<{
        nome: string;
        datacriacao: Date;
        dataatualizacao: Date;
        genero_id: number;
    }>;
}
