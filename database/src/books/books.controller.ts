import { Body, Controller, Get, Post } from "@nestjs/common";
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
    async createBook(@Body() book: BookDto) : Promise<BookDto> {
        // console.log('post controller', books)
        return await this.bookService.createBook(book);
    } 
}