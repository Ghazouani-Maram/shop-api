import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
 constructor(private readonly service: OrdersService) {}
 @Post() @ApiOperation({ summary: 'Commander avec verification du stock' })
 create(@Body() dto: CreateOrderDto) { return this.service.create(dto); }
 @Get() findAll() { return this.service.findAll(); }
}