import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateBookCopyDto } from './dto/create-book-copy.dto';
import { UpdateBookCopyDto } from './dto/update-book-copy.dto';

@Injectable()
export class BookCopyService {
  constructor(private readonly databaseService: DatabaseService) {}
  
    async create(createBookCopyDto: CreateBookCopyDto) {
      return this.databaseService.bookCopy.create( { 
        data:{
          book:{
            connect: {id: createBookCopyDto.bookId}
          },
          shelfId: createBookCopyDto.shelfId,
          status: createBookCopyDto.status,
          checkOut: createBookCopyDto.checkout,
          borrower: createBookCopyDto.borrowerId
           ?{ connect: {id: createBookCopyDto.borrowerId}}
           : undefined,
          barcode: createBookCopyDto.barcode ?? null,
        }} );
    }
  
    async findAll() {
      return this.databaseService.bookCopy.findMany({});
    }
  
    async findOne(id: number) {
      return this.databaseService.bookCopy.findUnique({
        where: {
          id, 
        }
      });
    }
  
    async update(id: number, updatebookCopyDto: UpdateBookCopyDto) {
      return this.databaseService.bookCopy.update({
        where: {id},
        data: {
          barcode: updatebookCopyDto.barcode,
          shelfId: updatebookCopyDto.shelfId,
          checkOut: updatebookCopyDto.checkOut ? new Date(updatebookCopyDto.checkOut) : null,
          status: updatebookCopyDto.status,
          book: updatebookCopyDto.bookId ? { connect: { id: updatebookCopyDto.bookId } } : undefined,
          borrower: updatebookCopyDto.borrowerId ? { connect: { id: updatebookCopyDto.borrowerId } } : undefined,
        },
      });
    }
  
    async remove(id: number) {
      return this.databaseService.bookCopy.delete({
        where:{
          id,
        }
      });
    }
  }
