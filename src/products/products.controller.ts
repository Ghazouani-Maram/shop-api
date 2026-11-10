import { Controller, Get, Post, Body, Patch, ParseIntPipe ,Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';


@ApiTags('Products')
@Controller('products')
export class ProductsController {
 constructor(private readonly service: ProductsService) {}
 @Post() @ApiOperation({ summary: 'Ajouter un produit a une categorie' })
 create(@Body() dto: CreateProductDto) { return this.service.create(dto); }
 @Get() findAll() { return this.service.findAll(); }
 @Get(':id') findOne(@Param('id', ParseIntPipe) id: number) {
   return this.service.findOne(id);
 }
}