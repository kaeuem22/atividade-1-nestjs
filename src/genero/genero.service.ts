import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GeneroService {
  constructor(private readonly prisma: PrismaService){}

  async create(createGeneroDto: CreateGeneroDto) {
    return await this.prisma.genero.create({
      data: createGeneroDto,
    });
  }

  async findAll() {
    return this.prisma.genero.findMany();
  }

  async findOne(genero_id: number) {
    return this.prisma.genero.findUnique({
      where: {genero_id},
    });
  }


  async update(genero_id: number, updateGeneroDto: UpdateGeneroDto) {
    return await this.prisma.genero.update({
      where: {genero_id},
      data: updateGeneroDto
    });
  }

  async remove(genero_id: number) {
    return await this.prisma.genero.delete({
      where: {genero_id}
    });
  }
}
