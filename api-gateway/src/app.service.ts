import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxyFactory, ClientProxy, Transport } from '@nestjs/microservices';
import { BookDto } from './dto/book.dto';
import { Observable, firstValueFrom } from 'rxjs';
import * as path from 'path';
import * as fs from 'fs';
import { Cron, CronExpression } from '@nestjs/schedule';


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

    const readyBooks = await firstValueFrom(this.ThirdPartyAPI.send<BookDto[], BookDto[]>('getBooks', {} as BookDto[]));

    readyBooks.forEach((book) => {
      this.DataBase.send<BookDto, BookDto>('createBook', book).subscribe();
    })

    return readyBooks;
  }

}
