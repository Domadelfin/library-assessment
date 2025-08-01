import { IsEmail, IsEnum, IsString, IsNumber, Matches, IsOptional } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  middleName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsEnum(Role)
  role: Role;

  @IsString()
  @Matches(/^\d{11}$/, { message: 'Phone number must be exactly 11 digits' })
  phoneNumber: string;

  @IsOptional()
  @IsNumber()
  pendingOverduePayment?: number;
}
