import { ObjectID } from 'typeorm';
interface Item {
    id?: ObjectID;
    name: string;
    qty: number;
    description?: string;
}