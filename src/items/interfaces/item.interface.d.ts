import { ObjectID } from 'typeorm';
interface Item {
    id?: string;
    name: string;
    qty: number;
    description?: string;
}