import { Injectable } from '@nestjs/common';
import { Prisma, Song } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class SongsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createSongDto: Prisma.SongCreateInput): Promise<Song> {
    return this.databaseService.song.create({
      data: createSongDto,
    });
  }

  findAll() {
    return this.databaseService.song.findMany({ include: { Artist: true } });
  }

  findOne(id: number) {
    return this.databaseService.song.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateSongDto: Prisma.SongUpdateInput) {
    return this.databaseService.song.update({
      where: {
        id,
      },
      data: updateSongDto,
    });
  }

  remove(id: number) {
    return this.databaseService.song.delete({
      where: {
        id,
      },
    });
  }
}
