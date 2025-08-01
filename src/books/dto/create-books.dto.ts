import { IsEnum, IsString, IsInt, IsOptional } from 'class-validator';
import { Categories } from '@prisma/client';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsEnum(Categories)
  category: Categories;

  @IsInt()
  authorId: number;

  @IsOptional()
  @IsString()
  isbn?: string;
}
