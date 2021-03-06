import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './configs/keys'

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.mongoURI, config.options),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
