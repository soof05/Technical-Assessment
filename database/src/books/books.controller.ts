import { Body, Controller, Get, Post } from "@nestjs/common";
import { BookService } from "./books.service";
import { BookDto } from "./dto/book.dto";
import { MessagePattern } from "@nestjs/microservices";


@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BookService) {}

    @MessagePattern('fetchingBooks')
    async getBooks(): Promise<BookDto[]> {
        return await this.bookService.getBooks()
    }

    @MessagePattern('createBook')
    async createBook(book: BookDto) : Promise<BookDto> {
        return await this.bookService.createBook(book);
    } 
}