import { IsEnum, IsString, IsInt, IsOptional, IsDateString } from 'class-validator';
import { Status } from '@prisma/client';

export class CreateBookCopyDto {
    @IsInt()
    bookId: number;

    @IsInt()
    shelfId: number;

    @IsOptional()
    @IsEnum(Status)
    status?: Status = Status.Available;

    @IsOptional()
    @IsDateString()
    checkout?: string;

    @IsOptional()
    @IsInt()
    borrowerId?: number;

    @IsOptional()
    @IsString()
    barcode?: string | null;
}
