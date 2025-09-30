import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { Users } from './users';
import { createUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly Users: Users) {}
  @Get()
  findall(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    return this.Users.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.Users.findOne(id);
  }

  @Post()
  createUser(
    @Body(ValidationPipe)
    user: createUserDto,
  ) {
    return this.Users.createUser(user);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    userUpdate: UpdateUserDto,
  ) {
    return this.Users.updateUser(id, userUpdate);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.Users.deleteUser(id);
  }
}
