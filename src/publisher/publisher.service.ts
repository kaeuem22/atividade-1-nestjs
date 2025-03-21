import { Injectable } from '@nestjs/common';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PublisherService {
  constructor(private readonly prisma: PrismaService){}

  async create(createPublisherDto: CreatePublisherDto) {
    return await this.prisma.publisher.create({
      data: createPublisherDto,
    });
  }

  async findAll() {
    return this.prisma.publisher.findMany();
  }

  async findOne(publisher_id: number) {
    return this.prisma.publisher.findUnique({
      where: {publisher_id},
    });
  }


  async update(publisher_id: number, updatePublisherDto: UpdatePublisherDto) {
    return await this.prisma.publisher.update({
      where: {publisher_id},
      data: updatePublisherDto
    });
  }

  async remove(publisher_id: number) {
    return await this.prisma.publisher.delete({
      where: {publisher_id}
    });
  }
}
