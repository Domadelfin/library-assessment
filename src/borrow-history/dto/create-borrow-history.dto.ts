import { IsInt, IsOptional, IsDateString } from 'class-validator';

export class CreateBorrowHistoryDto {
@IsInt()
userId: number;

@IsInt()
bookCopyId: number;

@IsOptional()
@IsDateString()
borrowedAt?: string;

@IsOptional()
@IsDateString()
returnedAt?: string;
}