import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BookDto } from './dto/book.dto';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<BookDto[]> {
    return this.appService.getAllBooks();
  }
}
