import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

const schemaOptions = {
    autoIndex: false,
    optimisticConcurrency: true,
    collation: { locale: 'en_US', numericOrdering: true, caseLevel: true }
}

@Schema(schemaOptions)
export class Item {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    qty: number;

    @Prop()
    description: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item)