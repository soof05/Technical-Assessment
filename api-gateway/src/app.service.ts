import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxyFactory, ClientProxy, Transport } from '@nestjs/microservices';
import { BookDto } from './dto/book.dto';
import { Observable, firstValueFrom } from 'rxjs';
import * as path from 'path';
import * as fs from 'fs';


@Injectable()
export class AppService {

  private ThirdPartyAPI: ClientProxy;
  private DataBase: ClientProxy;

  constructor() {
    this.ThirdPartyAPI = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3001
      },
    }),
      this.DataBase = ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 5000
        },
      })
      ;
  }


  async getAllBooks(): Promise<BookDto[]> {

    const booksPath = await firstValueFrom(this.ThirdPartyAPI.send<string>('getBookPath', {}))

    console.log('path in gateway', booksPath);

    fs.watchFile(booksPath, async (curr, prev) => {
      if (curr.mtime !== prev.mtime) {
        console.log('File changed');
        const readyBooks = await firstValueFrom(this.ThirdPartyAPI.send<BookDto[], BookDto[]>('getBooks', {} as BookDto[]));
        readyBooks.forEach((book) => {
          console.log(book);
          this.DataBase.send<BookDto, BookDto>('createBook', book).subscribe();
        })


      }
    });

    const readyBooks = await firstValueFrom(this.ThirdPartyAPI.send<BookDto[], BookDto[]>('getBooks', {} as BookDto[]));

    readyBooks.forEach((book) => {
      // console.log(book);
      this.DataBase.send<BookDto, BookDto>('createBook', book).subscribe();
    })

    // return this.ThirdPartyAPI.send<BookDto[], BookDto[]>('getBooks', {} as BookDto[])
    return readyBooks;
  }

}
