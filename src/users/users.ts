import { Injectable, NotFoundException } from '@nestjs/common';
import { createUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';

@Injectable()
export class Users {
  private users = [
    {
      id: 1,
      name: 'Raheel1',
      email: 'raheel1@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Raheel2',
      email: 'raheel2@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Raheel3',
      email: 'raheel3@gmail.com',
      role: 'INTERN',
    },
    {
      id: 4,
      name: 'Raheel4',
      email: 'raheel4@gmail.com',
      role: 'INTERN',
    },
    {
      id: 5,
      name: 'Raheel5',
      email: 'raheel5@gmail.com',
      role: 'ENGINEER',
    },
  ];
  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const roles_array = this.users.filter((user) => user.role === role);
      if (roles_array.length === 0) {
        throw new NotFoundException('Roles is not valid.');
      }
      return this.users;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return user;
  }

  createUser(user: createUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, updateUser: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUser };
      }
      return user;
    });
    return this.findOne(id);
  }
  deleteUser(id: number) {
    const removedUser = this.findOne(id);
    this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
