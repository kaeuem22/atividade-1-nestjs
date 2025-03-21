import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublisherModule } from './publisher/publisher.module';
import { JogoModule } from './jogo/jogo.module';
import { GeneroModule } from './genero/genero.module';

@Module({
  imports: [PublisherModule, JogoModule, GeneroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
