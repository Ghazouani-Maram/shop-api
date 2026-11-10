import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category)
    private readonly repo: Repository<Category>) {}
  create(dto: CreateCategoryDto) { return this.repo.save(this.repo.create(dto)); }
  findAll() { return this.repo.find({ relations: { products: true } }); }
  async findOne(id: number) {
    const c = await this.repo.findOne({ where: { id },
      relations: { products: true } });
    if (!c) throw new NotFoundException('Categorie introuvable');
    return c;
  }
}