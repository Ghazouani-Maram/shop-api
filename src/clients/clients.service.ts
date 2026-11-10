import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(@InjectRepository(Client)
    private readonly repo: Repository<Client>) {}
  create(dto: CreateClientDto) {
    return this.repo.save(this.repo.create(dto));
  }
  findAll() { return this.repo.find(); }
  async findOne(id: number) {
    const c = await this.repo.findOneBy({ id });
    if (!c) throw new NotFoundException('Client introuvable');
    return c;
  }
}