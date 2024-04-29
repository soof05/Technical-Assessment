import { Injectable } from '@nestjs/common';
import { BooksRepository } from './books.repository';
import { Book } from './schemas/books.schema';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BookService {
  constructor(private readonly booksrepository: BooksRepository) {}

  async getBooks(): Promise<Book[]> {
    return await this.booksrepository.find({});
  }

  async createBook(book: BookDto): Promise<Book> {
    return await this.booksrepository.createBook(book);
  }
}
