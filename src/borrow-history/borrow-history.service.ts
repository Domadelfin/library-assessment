import { Injectable } from '@nestjs/common';
import { CreateBorrowHistoryDto } from './dto/create-borrow-history.dto';
import { UpdateBorrowHistoryDto } from './dto/update-borrow-history.dto';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BorrowHistoryService {
  constructor(private readonly databaseService: DatabaseService) {
  
    }
  
    async create(createBorrowHistoryDto: CreateBorrowHistoryDto) {
      return this.databaseService.borrowHistory.create( { 
        data: {    
          user: { connect: { id: createBorrowHistoryDto.userId } },
          bookCopy: { connect: { id: createBorrowHistoryDto.bookCopyId } },
          borrowedAt: createBorrowHistoryDto.borrowedAt ? new Date(createBorrowHistoryDto.borrowedAt) : undefined,
          returnedAt: createBorrowHistoryDto.returnedAt ? new Date(createBorrowHistoryDto.returnedAt) : undefined,
        } });
    }
  
    async findAll() {
      return this.databaseService.borrowHistory.findMany({});
    }
  
    async findOne(id: number) {
      return this.databaseService.borrowHistory.findUnique({
        where: {
          id, 
        }
      });
    }
  
    async update(id: number, updateBorrowHistoryDto: UpdateBorrowHistoryDto) {
      return this.databaseService.borrowHistory.update({
        where: {
          id,
        },
        data: {
          borrowedAt: updateBorrowHistoryDto.borrowedAt
            ? new Date(updateBorrowHistoryDto.borrowedAt)
            : undefined,

          returnedAt: updateBorrowHistoryDto.returnedAt
            ? new Date(updateBorrowHistoryDto.returnedAt)
            : undefined,

          user: updateBorrowHistoryDto.userId
            ? { connect: { id: updateBorrowHistoryDto.userId } }
            : undefined,

          bookCopy: updateBorrowHistoryDto.bookCopyId
            ? { connect: { id: updateBorrowHistoryDto.bookCopyId } }
            : undefined,
        },
      });
    }
  
    async remove(id: number) {
      return this.databaseService.borrowHistory.delete({
        where:{
          id,
        }
      });
    }
  }
