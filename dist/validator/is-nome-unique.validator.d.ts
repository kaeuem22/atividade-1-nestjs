import { ValidationOptions, ValidatorConstraintInterface } from "@nestjs/class-validator";
import { PrismaService } from "src/prisma/prisma.service";
export declare class IsNomeUniqueConstraint implements ValidatorConstraintInterface {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    validate(nome: string): Promise<boolean>;
    defaultMessage(): string;
}
export declare function IsNomeUnico(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
