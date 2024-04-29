import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BookSchema, Book } from "./schemas/books.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Book.name, schema: BookSchema}])]
})
export class BookModule {}