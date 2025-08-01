import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe  } from '@nestjs/common';
import { BorrowHistoryService } from './borrow-history.service';
import { Prisma } from '@prisma/client';
import { CreateBorrowHistoryDto } from './dto/create-borrow-history.dto';
import { UpdateBorrowHistoryDto } from './dto/update-borrow-history.dto';

@Controller('borrow-history')
export class BorrowHistoryController {
  constructor(private readonly borrowHistoryService: BorrowHistoryService) {}

  @Post()
  create(@Body() createBorrowHistoryDto: CreateBorrowHistoryDto) {
    return this.borrowHistoryService.create(createBorrowHistoryDto);
  }

  @Get()
  findAll() {
    return this.borrowHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.borrowHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateBorrowHistoryDto: UpdateBorrowHistoryDto) {
    return this.borrowHistoryService.update(+id, updateBorrowHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.borrowHistoryService.remove(+id);
  }
}
