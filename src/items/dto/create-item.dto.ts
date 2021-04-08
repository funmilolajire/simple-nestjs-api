import { ObjectID } from 'typeorm';
export class CreateItemDto {
    readonly id: string;
    readonly qty: number;
    readonly name: string;
    readonly description: string;
}
