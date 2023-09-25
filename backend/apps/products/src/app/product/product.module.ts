import {Module} from '@nestjs/common';
import {ProductController} from './product.controller';
import {ProductService} from './product.service';
import {MongooseModule} from "@nestjs/mongoose";
import {ProductSchema} from "./product.model";
import {GUITAR_NAME} from "./product.constant";


@Module({
  imports: [
    MongooseModule.forFeature([
      {name: GUITAR_NAME, schema: ProductSchema}
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
