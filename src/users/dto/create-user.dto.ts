import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly age: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
