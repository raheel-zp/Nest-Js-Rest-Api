/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { createUserDto } from './dto/create-users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll() {
    return this.databaseService.user.findMany({ include: { Profile: true } });
  }

  findOne(id: number) {
    return this.databaseService.user.findUnique({
      where: { id },
    });
  }

  createUser(user: createUserDto) {
    return this.databaseService.user.create({
      data: {
        name: user.name,
        Profile: {
          create: {
            photo: user.photo,
            phone: user.phone,
          },
        },
      },
    });
  }

  updateUser(id: number, updateUser: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: { id },
      data: updateUser,
    });
  }

  deleteUser(id: number) {
    return this.databaseService.user.delete({
      where: { id },
    });
  }
}
