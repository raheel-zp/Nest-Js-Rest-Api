import { Module } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { PlaylistsController } from './playlists.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [PlaylistsController],
  providers: [PlaylistsService, DatabaseService],
})
export class PlaylistsModule {}
