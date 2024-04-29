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

  async createManyBooks(books: BookDto[]): Promise<Book[]> {
    // return await this.booksrepository.create({
    //   title: book.title,
    //   author: book.author,
    //   publication_year: book.publication_year,
    //   genre: book.genre,
    // });

    return await this.booksrepository.createBooks(books);
  }
}
