import { PartialType } from '@nestjs/mapped-types';
import { CreateNeftDto } from './create-neft.dto';

export class UpdateNeftDto extends PartialType(CreateNeftDto) {}
