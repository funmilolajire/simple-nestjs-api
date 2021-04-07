import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Item } from './entity/item.entity';

@Injectable()
export class ItemsService {
    constructor(@InjectRepository(Item) private itemRepository: Repository<Item>) { }
    // private readonly pencil = {
    //     name: "Pencil",
    //     qty: 100,
    //     description: "Used for writing and shit."
    // }
    // private readonly pen = {
    //     name: "Pen",
    //     qty: 50,
    //     description: "Also used for writing and shit bruv!"
    // }
    // private readonly ink = {
    //     name: "Ink",
    //     qty: 5,
    //     description: "Shit! I don't know, what do you think??"
    // }

    // async saveItems() {
    //     await this.itemRepository.save(this.pen);
    //     await this.itemRepository.save(this.pencil);
    //     await this.itemRepository.save(this.ink);
    // }

    async findAll(): Promise<Item[]> {
        // await this.saveItems();
        return await this.itemRepository.find({});
    }

    async findOne(id: string): Promise<Item | ExceptionInformation> {
        let found = await this.itemRepository.findOne(id)
        if (!found) {
            throw new NotFoundException('item not found')
        } else {
            return found;
        }
    }

    async createNewItem(item: Item): Promise<Item[]> {
        await this.itemRepository.save(item);
        return await this.itemRepository.find({});
    }

    async updateItem(id: string, item: Item): Promise<Item[] | ExceptionInformation> {
        let found = await this.itemRepository.findOne(id)
        if (!found) {
            throw new NotFoundException('item not found')
        } else {
            await this.itemRepository.update(id, item)
            return await this.itemRepository.find({});
        }
    }

    async deleteItem(id: string): Promise<Item[] | ExceptionInformation> {
        let found = await this.itemRepository.findOne(id)
        if (!found) {
            throw new NotFoundException('item not found')
        } else {
            await this.itemRepository.delete(id)
            return await this.itemRepository.find({});
        }
    }
}
