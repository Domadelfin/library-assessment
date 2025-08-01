import { IsOptional, IsString, IsInt, IsEnum } from 'class-validator';
import { Categories } from '@prisma/client';

export class UpdateBookDto {
@IsOptional()
@IsString()
title?: string;

@IsOptional()
@IsEnum(Categories)
category?: Categories;

@IsOptional()
@IsInt()
authorId?: number;

@IsOptional()
@IsString()
isbn?: string | null;
}
