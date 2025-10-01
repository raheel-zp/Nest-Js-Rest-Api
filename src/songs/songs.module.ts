import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [SongsController],
  providers: [SongsService, DatabaseService],
})
export class SongsModule {}
