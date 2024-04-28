import { Controller, Get } from '@nestjs/common';
import {BookService } from './book.service';
import { BookDto } from './dto/book.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @MessagePattern('getBooks')
  async getAllBooks(): Promise<BookDto> {
    return this.bookService.getBooks();
  }
}
