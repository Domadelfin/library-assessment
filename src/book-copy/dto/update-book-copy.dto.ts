import { IsOptional, IsString, IsEnum, IsInt, IsDateString } from 'class-validator';
import { Status } from '@prisma/client';

export class UpdateBookCopyDto {
@IsOptional()
@IsString()
barcode?: string | null;

@IsOptional()
@IsInt()
bookId?: number;

@IsOptional()
@IsInt()
shelfId?: number;

@IsOptional()
@IsEnum(Status)
status?: Status;

@IsOptional()
@IsDateString()
checkOut?: string | null;

@IsOptional()
@IsInt()
borrowerId?: number | null;
}
