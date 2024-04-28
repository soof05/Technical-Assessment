import { Controller, Get } from '@nestjs/common';
import {BookService } from './book.service';
import { BookDto } from './dto/book-dto';

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAllBooks(): BookDto {
    return this.bookService.getBooks();
  }
}
