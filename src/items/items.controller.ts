import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
}
    from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    getAll() {
        return this.itemsService.findAll();
    }

    @Get(':id')
    //getById(@Param('id') id) {}
    getById(@Param() param: { id: string }) {
        return this.itemsService.findOne(param.id);
    }

    @Post()
    createNewEntry(@Body() createItemDto: CreateItemDto) {
        return this.itemsService.createNewItem(createItemDto)
    }

    @Put(':id')
    updateEntry(@Param() param: { id: string }, @Body() updateItemDto: CreateItemDto) {
        return this.itemsService.updateItem(param.id, updateItemDto);
    }

    @Delete(':id')
    deleteEntryById(@Param() param: { id: string }) {
        return this.itemsService.deleteItem(param.id);
    }
}
