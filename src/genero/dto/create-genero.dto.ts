import { IsNotEmpty, Length } from "@nestjs/class-validator";
import { IsNomeUnico } from "src/validator/is-nome-unique.validator";

export class CreateGeneroDto {
    @IsNotEmpty()
    @IsNomeUnico()
    @Length(3,255)
    nome: string;
}
