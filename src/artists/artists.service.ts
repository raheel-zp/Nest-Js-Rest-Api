/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { Prisma, Artist } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ArtistsService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createArtistDto: Prisma.ArtistCreateInput): Promise<Artist> {
    return this.databaseService.artist.create({ data: createArtistDto });
  }

  findAll() {
    return this.databaseService.artist.findMany();
  }

  findOne(id: number) {
    return this.databaseService.artist.findUnique({ where: { id } });
  }

  update(id: number, updateArtistDto: Prisma.ArtistUpdateInput) {
    return this.databaseService.artist.update({
      where: {
        id,
      },
      data: updateArtistDto,
    });
  }

  remove(id: number) {
    return this.databaseService.artist.delete({ where: { id } });
  }
}
