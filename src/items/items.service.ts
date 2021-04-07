import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './schema/item.schema';

@Injectable()
export class ItemsService {
    constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) { }
    private readonly pencil = {
        name: "Pencil",
        qty: 100,
        description: "Used for writing and shit."
    }
    private readonly pen = {
        name: "Pen",
        qty: 50,
        description: "Also used for writing and shit bruv!"
    }
    private readonly ink = {
        name: "Ink",
        qty: 5,
        description: "Shit! I don't know, what do you think??"
    }

    async saveItems() {
        const pen = new this.itemModel(this.pen);
        const pencil = new this.itemModel(this.pencil);
        const ink = new this.itemModel(this.ink);
        pen.save();
        pencil.save();
        ink.save()
    }

    async findAll(): Promise<Item[]> {
        // await this.saveItems();
        return await this.itemModel.find({});
    }

    async findOne(id: string): Promise<Item> {
        return await this.itemModel.findById(id).exec();
    }

    async createNewItem(item: Item): Promise<Item[]> {
        const newItem = new this.itemModel(item)
        await newItem.save();
        return await this.itemModel.find({});
    }

    async updateItem(id: string, item: Item): Promise<Item[]> {
        await this.itemModel.findByIdAndUpdate(id, item, { new: true })
        return await this.itemModel.find({});
    }

    async deleteItem(id: string): Promise<Item[]> {
        await this.itemModel.findByIdAndDelete(id)
        return await this.itemModel.find({});
    }
}
