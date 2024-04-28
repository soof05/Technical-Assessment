import { Injectable } from '@nestjs/common';
import { BookDto } from './dto/book.dto';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class BookService {
  getBooks(): BookDto {
    const bookDataPath: string = path.join(__dirname, '../src/data/books/books.json');

    console.log('directory',  bookDataPath)

    const dataBookFile = fs.readFileSync(bookDataPath, 'utf-8')

    const dataBooksAsJson = JSON.parse(dataBookFile)

    const books: BookDto = dataBooksAsJson.books.map((book: BookDto) => {
      return {
        title: book.title,
        author: book.author,
        publication_year: book.publication_year,
        genre: book.genre
      };
    })
    
    return (books)
  }
}
