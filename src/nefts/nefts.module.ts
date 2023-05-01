import { Module } from '@nestjs/common';
import { NeftsService } from './nefts.service';
import { NeftsController } from './nefts.controller';

@Module({
  controllers: [NeftsController],
  providers: [NeftsService],
})
export class NeftsModule {}
