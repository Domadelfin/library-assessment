import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  constructor(private readonly databaseService: DatabaseService) {

  }

  async create(createAuthorDto: CreateAuthorDto) {
    return this.databaseService.author.create( { 
      data: {
        name: createAuthorDto.name,
        bio: createAuthorDto.bio,
      } } );
  }

  async findAll() {
    return this.databaseService.author.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.author.findUnique({
      where: {
        id, 
      }
    });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    const { name, bio, bookIds } = updateAuthorDto;

    const updateData: any = {
      name,
      bio,
    };

    if (bookIds && bookIds.length > 0) {
      updateData.books = {
        connect: bookIds.map((bookId) => ({ id: bookId })),
      };
    }

    return this.databaseService.author.update({
      where: { id },
      data: updateData,
      include: { books: true },
    });
  }


  async remove(id: number) {
    return this.databaseService.author.delete({
      where:{
        id,
      }
    });
  }

  async findBooksByAuthor(authorId: number) {
    return this.databaseService.book.findMany({
      where: {
        authorId: authorId,
      },
    });
  }
}