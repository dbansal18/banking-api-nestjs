import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { iUser } from './interfaces/users.interface';

const users: iUser[] = [];
@Injectable()
export class UsersService {
  create(userPayload: CreateUserDto) {
    const user = { ...userPayload, id: uuidv4() };
    users.push(user);
    return user;
  }

  findAll() {
    return users;
  }

  findOne(id: string) {
    for (const user of users) {
      if (user.id === id) {
        return user;
      }
    }
    throw new HttpException('unable to find the user', HttpStatus.NOT_FOUND);
  }

  update(id: string, updateUserPayload: UpdateUserDto) {
    const user = this.findOne(id);
    if (!user) {
      throw new HttpException('unable to find the user', HttpStatus.NOT_FOUND);
    }
    for (const key in updateUserPayload) {
      user[key] = updateUserPayload[key];
    }
    return user;
  }

  remove(id: string) {
    const idx = users.findIndex((user) => user.id === id);
    if (idx === -1) {
      throw new HttpException('unable to find the user', HttpStatus.NOT_FOUND);
    }
    const user = users.splice(idx, 1);
    return {
      is_deleted: true,
      message: `User ${id} deleted successfully.`,
      date: user,
    };
  }
}
