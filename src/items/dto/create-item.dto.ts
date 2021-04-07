import { ObjectID } from 'typeorm';
export class CreateItemDto {
    readonly id: ObjectID;
    readonly qty: number;
    readonly name: string;
    readonly description: string;
}
