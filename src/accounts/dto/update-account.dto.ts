import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateAccountDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  balance: number;
}
