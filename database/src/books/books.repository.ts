import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { BookDocument, Book } from "./schemas/books.schema";
import { Model } from 'mongoose'

@Injectable()
export class BooksRepository {
    constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}
}