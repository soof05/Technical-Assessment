import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BookDocument, Book } from './schemas/books.schema';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class BooksRepository {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async find(booksFilterQuery: FilterQuery<Book>): Promise<Book[]> {
    return await this.bookModel.find(booksFilterQuery);
  }

  async createBook(book: Book): Promise<Book> {
    const newBook = new this.bookModel(book);
    console.log('new book added', newBook, '-------')
    return newBook.save();
  }
}
