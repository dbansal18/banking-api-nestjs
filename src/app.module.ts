import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import { NeftsModule } from './nefts/nefts.module';

@Module({
  imports: [UsersModule, AccountsModule, TransactionsModule, NeftsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
