import { ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "@nestjs/class-validator";
import {Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@ValidatorConstraint({async: true})
@Injectable()

export class IsNomeUniqueConstraint implements ValidatorConstraintInterface{
    constructor(private readonly prismaService: PrismaService){}
    async validate(nome: string) {
        if (!this.prismaService) {
            return false
        }
        const usuario = await this.prismaService.genero.findFirst({where:{ nome }});
        return !usuario;
    }

    defaultMessage(){
        return 'Genero já existe'
    }

    
}


export function IsNomeUnico(validationOptions?: ValidationOptions){
    return function (object: Object, propertyName: string){
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsNomeUniqueConstraint,
        })
    }
}