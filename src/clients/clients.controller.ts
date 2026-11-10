import { Controller, Get, ParseIntPipe , Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';


@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
 constructor(private readonly service: ClientsService) {}
 @Post() create(@Body() dto: CreateClientDto) {
   return this.service.create(dto);
 }
 @Get() findAll() { return this.service.findAll(); }
 @Get(':id') findOne(@Param('id', ParseIntPipe) id: number) {
   return this.service.findOne(id);
  }
}