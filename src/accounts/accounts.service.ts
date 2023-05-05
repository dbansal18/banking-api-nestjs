import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { iAccount } from './interfaces/accounts.interface';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

const accounts: iAccount[] = [];

@Injectable()
export class AccountsService {
  create(accountPayload: CreateAccountDto) {
    const account: iAccount = { ...accountPayload, id: uuidv4(), balance: 0 };
    accounts.push(account);
    return account;
  }

  findAll() {
    return accounts;
  }

  findOne(id: string) {
    for (const account of accounts) {
      if (account.id === id) {
        return account;
      }
    }
    throw new HttpException('Unable to find the account', HttpStatus.NOT_FOUND);
  }

  update(id: string, updateAccountPayload: UpdateAccountDto) {
    const account = this.findOne(id);
    if (!account) {
      throw new HttpException(
        'Unable to find the account',
        HttpStatus.NOT_FOUND,
      );
    }
    for (const key in updateAccountPayload) {
      account[key] = updateAccountPayload[key];
    }
    return account;
  }

  remove(id: string) {
    const idx = accounts.findIndex((account) => account.id === id);
    if (idx === -1) {
      throw new HttpException(
        'Unable to find the account',
        HttpStatus.NOT_FOUND,
      );
    }
    const account = accounts.splice(idx, 1);
    return {
      is_deleted: true,
      message: `Account ${id} deleted successfully.`,
      date: account,
    };
  }
}
