import { Injectable, OnModuleInit } from '@nestjs/common';
import { BookDto } from './dto/book.dto';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class BookService {
  private bookDataPath: string = path.join(__dirname, '../src/data/books/books.json');

  // onModuleInit() {
  //   fs.watchFile(this.bookDataPath, async (curr, prev) => {
  //     if (curr.mtime !=  prev.mtime)
  //       {
  //         console.log('file changed')
  //         await this.handleFileChange();
  //       }
  //   })
  // }

  // async handleFileChange() {

  // }

  getBooks(): BookDto {

    const dataBookFile = fs.readFileSync(this.bookDataPath, 'utf-8')

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

  getBooksPath(): string {
    const path = this.bookDataPath;
    return (path);
  }
}
