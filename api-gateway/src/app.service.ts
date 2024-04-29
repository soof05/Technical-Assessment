import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, ClientProxy, Transport } from '@nestjs/microservices';
import { BookDto } from './dto/book.dto';
import { Observable, firstValueFrom } from 'rxjs';


@Injectable()
export class AppService {

  private ThirdPartyAPI:  ClientProxy;
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

  async getAllBooks(): Promise<void> {
    const readyBooks = await firstValueFrom(this.ThirdPartyAPI.send<BookDto[], BookDto[]>('getBooks', {} as BookDto[]));

    readyBooks.forEach((book) => {
      console.log(book);
      this.DataBase.send<BookDto, BookDto>('createBook', book).subscribe(result => console.log(result));
    })

    // return this.ThirdPartyAPI.send<BookDto[], BookDto[]>('getBooks', {} as BookDto[])
    return ;
  }
}
