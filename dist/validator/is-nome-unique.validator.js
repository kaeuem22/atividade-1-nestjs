"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNomeUniqueConstraint = void 0;
exports.IsNomeUnico = IsNomeUnico;
const class_validator_1 = require("@nestjs/class-validator");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let IsNomeUniqueConstraint = class IsNomeUniqueConstraint {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async validate(nome) {
        if (!this.prismaService) {
            return false;
        }
        const usuario = await this.prismaService.genero.findFirst({ where: { nome } });
        return !usuario;
    }
    defaultMessage() {
        return 'Genero já existe';
    }
};
exports.IsNomeUniqueConstraint = IsNomeUniqueConstraint;
exports.IsNomeUniqueConstraint = IsNomeUniqueConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], IsNomeUniqueConstraint);
function IsNomeUnico(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsNomeUniqueConstraint,
        });
    };
}
//# sourceMappingURL=is-nome-unique.validator.js.map