import { Injectable } from '@nestjs/common';
import { CreateNeftDto } from './dto/create-neft.dto';
import { UpdateNeftDto } from './dto/update-neft.dto';

@Injectable()
export class NeftsService {
  create(createNeftDto: CreateNeftDto) {
    return 'This action adds a new neft';
  }

  findAll() {
    return `This action returns all nefts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} neft`;
  }

  update(id: number, updateNeftDto: UpdateNeftDto) {
    return `This action updates a #${id} neft`;
  }

  remove(id: number) {
    return `This action removes a #${id} neft`;
  }
}
