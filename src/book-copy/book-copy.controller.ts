import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BookCopyService } from './book-copy.service';
import { Prisma } from '@prisma/client';
import { CreateBookCopyDto } from './dto/create-book-copy.dto';
import { UpdateBookCopyDto } from './dto/update-book-copy.dto';

@Controller('book-copy')
export class BookCopyController {
  constructor(private readonly bookCopyService: BookCopyService) {}

  @Post()
  create(@Body() createBookCopyDto: CreateBookCopyDto) {
    return this.bookCopyService.create(createBookCopyDto);
  }

  @Get()
  findAll() {
    return this.bookCopyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.bookCopyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateBookCopyDto: UpdateBookCopyDto) {
    return this.bookCopyService.update(+id, updateBookCopyDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.bookCopyService.remove(+id);
  }
}
