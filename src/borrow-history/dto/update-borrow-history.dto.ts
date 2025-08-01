import { PartialType } from '@nestjs/mapped-types';
import { CreateBorrowHistoryDto } from './create-borrow-history.dto';
import { IsOptional, IsDateString, IsInt } from 'class-validator';

export class UpdateBorrowHistoryDto extends PartialType(CreateBorrowHistoryDto) {
@IsOptional()
@IsInt()
userId?: number;

@IsOptional()
@IsInt()
bookCopyId?: number;

@IsOptional()
@IsDateString()
borrowedAt?: string;

@IsOptional()
@IsDateString()
returnedAt?: string;
}