import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateBookDto } from './dto/create-books.dto';
import { UpdateBookDto } from './dto/update-books.dto';

@Injectable()
export class BooksService {
  constructor(private readonly databaseService: DatabaseService) {

  }

  async create(createBookDto: CreateBookDto) {
    const existingBook = await this.databaseService.book.findFirst({
      where: {
        title: createBookDto.title,
        authorId: createBookDto.authorId,
      },
    });

    if (existingBook) {
      throw new Error('This book by the same author already exists.');
    }
    
    return this.databaseService.book.create( { 
      data: {
        title: createBookDto.title,
        category: createBookDto.category,
        author: {
          connect: {id: createBookDto.authorId}
        },
        isbn: createBookDto.isbn,
      }
    } );
  }

  async findAll() {
    return this.databaseService.book.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.book.findUnique({
      where: {
        id, 
      }
    });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    return this.databaseService.book.update({
      where: {
        id,
      },
      data: {
        title: updateBookDto.title,
        category: updateBookDto.category,
        isbn: updateBookDto.isbn,
        ...(updateBookDto.authorId && {
          author: {
            connect: { id: updateBookDto.authorId },
        },
      }),
    },
    });
  }

  async remove(id: number) {
    return this.databaseService.book.delete({
      where:{
        id,
      }
    });
  }
}
