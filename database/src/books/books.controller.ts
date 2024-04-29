import { Body, Controller, Get, Post } from "@nestjs/common";
import { BookService } from "./books.service";
import { BookDto } from "./dto/book.dto";
import { EventPattern, MessagePattern } from "@nestjs/microservices";


@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BookService) {}

    @MessagePattern('fetchingBooks')
    async getBooks(): Promise<BookDto[]> {
        console.log('helllloo')
        return await this.bookService.getBooks()
    }

    @EventPattern('createBook')
    async createBook(book: BookDto) : Promise<BookDto> {
        console.log('hello')
        return await this.bookService.createBook(book);
    } 
}