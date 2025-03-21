import { Injectable } from '@nestjs/common';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JogoService {
  constructor(private readonly prisma: PrismaService){}

  async create(createJogoDto: CreateJogoDto) {
    return await this.prisma.jogo.create({
      data: createJogoDto,
    });
  }

  async findAll() {
    return this.prisma.jogo.findMany();
  }

  async findOne(jogo_id: number) {
    return this.prisma.jogo.findUnique({
      where: {jogo_id},
    });
  }


  async update(jogo_id: number, updateJogoDto: UpdateJogoDto) {
    return await this.prisma.jogo.update({
      where: {jogo_id},
      data: updateJogoDto
    });
  }

  async remove(jogo_id: number) {
    return await this.prisma.jogo.delete({
      where: {jogo_id}
    });
  }
}