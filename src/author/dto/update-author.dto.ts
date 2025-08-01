import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorDto } from './create-author.dto';
import { IsOptional, IsArray, IsInt } from 'class-validator';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
@IsOptional()
@IsArray()
@IsInt({ each: true })
bookIds?: number[];
}
