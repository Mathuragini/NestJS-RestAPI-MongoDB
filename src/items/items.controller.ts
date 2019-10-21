import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/items.interface';
import { identifier } from '@babel/types';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  //post items api
  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  //get all items api
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  //get one item by id
  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  //delete items api
  @Delete(':id')
  async delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }

  //update items api
  @Put()
  async update(
    @Param('id') id,
    @Body() createItemDto: CreateItemDto,
  ): Promise<Item> {
    return this.itemsService.update(id, createItemDto);
  }
}
