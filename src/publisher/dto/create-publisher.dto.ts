import { IsEmail, IsNotEmpty, Length } from "@nestjs/class-validator";

export class CreatePublisherDto {    @IsNotEmpty()
    @Length(5,255)
    nome: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}
