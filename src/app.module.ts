import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Item } from './items/entity/item.entity';
import { getConnectionOptions } from 'typeorm';

@Module({
  imports: [ItemsModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return Object.assign(await getConnectionOptions(), {
          "entities": [Item]
        })
      }
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
