import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, ClientProxy, Transport } from '@nestjs/microservices';
import { BookDto } from './dto/book.dto';
import { Observable } from 'rxjs';


@Injectable()
export class AppService {

  private client:  ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3001
      },
    });
  }

  getAllBooks(): Observable<BookDto[]> {
    return this.client.send<BookDto[], BookDto[]>('getBooks', {} as BookDto[])
  }
}
