import { IsNotEmpty, Length } from "@nestjs/class-validator";

export class CreateJogoDto {
    @IsNotEmpty()
    @Length(1,255)
    nome: string;

    @IsNotEmpty()
    lancamento: Date;

    @IsNotEmpty()
    genero_id: number;

    @IsNotEmpty()
    publisher_id: number;
}



