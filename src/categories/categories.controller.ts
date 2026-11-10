import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
 constructor(private readonly service: CategoriesService) {}
 @Post() @ApiOperation({ summary: 'Creer une categorie' })
 create(@Body() dto: CreateCategoryDto) { return this.service.create(dto); }
 @Get() @ApiOperation({ summary: 'Lister les categories et produits' })
 findAll() { return this.service.findAll(); }
 @Get(':id') findOne(@Param('id', ParseIntPipe) id: number) {
   return this.service.findOne(id);
 }
}