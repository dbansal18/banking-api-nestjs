import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NeftsService } from './nefts.service';
import { CreateNeftDto } from './dto/create-neft.dto';
import { UpdateNeftDto } from './dto/update-neft.dto';

@Controller('nefts')
export class NeftsController {
  constructor(private readonly neftsService: NeftsService) {}

  @Post()
  create(@Body() createNeftDto: CreateNeftDto) {
    return this.neftsService.create(createNeftDto);
  }

  @Get()
  findAll() {
    return this.neftsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.neftsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNeftDto: UpdateNeftDto) {
    return this.neftsService.update(+id, updateNeftDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.neftsService.remove(+id);
  }
}
