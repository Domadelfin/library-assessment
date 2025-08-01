import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BooksModule } from './books/books.module';
import { UserModule } from './user/user.module';
import { BookCopyModule } from './book-copy/book-copy.module';
import { AuthorModule } from './author/author.module';
import { BorrowHistoryModule } from './borrow-history/borrow-history.module';

@Module({
  imports: [DatabaseModule, BooksModule, UserModule, BookCopyModule, AuthorModule, BorrowHistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
