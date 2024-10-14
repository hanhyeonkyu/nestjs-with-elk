import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product/product.schema';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb-service:27017/simple-app'),
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    LoggerModule,
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
