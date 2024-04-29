import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BookSchema, Book } from "./schemas/books.schema";
import { BooksController } from "./books.controller";
import { BookService } from "./books.service";
import { BooksRepository } from "./books.repository";

@Module({
    imports: [MongooseModule.forFeature([{name: Book.name, schema: BookSchema}])],
    controllers: [BooksController],
    providers: [BookService, BooksRepository]
})
export class BookModule {}