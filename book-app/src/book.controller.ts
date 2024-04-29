import { Controller, Get } from '@nestjs/common';
import {BookService } from './book.service';
import { BookDto } from './dto/book.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @MessagePattern('getBooks')
  async getAllBooks(): Promise<BookDto> {
    return this.bookService.getBooks();
  }

  @MessagePattern('getBookPath')
  async getPathBook() : Promise<string> {
    return this.bookService.getBooksPath();
  }
}
