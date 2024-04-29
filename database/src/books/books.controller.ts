import { Controller, Get, Post } from "@nestjs/common";
import { BookService } from "./books.service";
import { BookDto } from "./dto/book.dto";


@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    async getBooks(): Promise<BookDto[]> {
        return await this.bookService.getBooks()
    }

    @Post()
    async createBooks(books: BookDto[]) : Promise<BookDto[]> {
        return await this.bookService.createManyBooks(books);
    } 
}