import { Injectable, Inject } from '@nestjs/common';
import { Item } from './interfaces/items.interface';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { promises } from 'dns';

@Injectable()
export class ItemsService {
  constructor(@Inject('ITEM_MODEL') private readonly itemModel: Model<Item>) {}

  //service to create items
  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItems = new this.itemModel(createItemDto);
    return await createdItems.save();
  }

  //service to find all items
  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  //service to find one item by id
  async findOne(id: string): Promise<Item> {
    return await this.itemModel.find({ _id: id });
  }

  //service to delete item
  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  //service to update items
  async update(id, obj): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, obj, { new: true });
  }
}
