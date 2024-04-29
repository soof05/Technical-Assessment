
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose';


export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop()
    title: string;

    @Prop()
    author: string;

    @Prop()
    publication_year: number;

    @Prop()
    genre: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);