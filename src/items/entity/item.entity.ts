// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

// export type ItemDocument = Item & Document;

// const schemaOptions = {
//     autoIndex: false,
//     optimisticConcurrency: true,
//     collation: { locale: 'en_US', numericOrdering: true, caseLevel: true }
// }

@Entity()
export class Item {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string;

    @Column()
    qty: number;

    @Column()
    description: string;
}

// export const ItemSchema = SchemaFactory.createForClass(Item)