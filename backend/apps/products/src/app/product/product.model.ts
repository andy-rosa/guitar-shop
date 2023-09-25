import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose';
import {CountStringsType, GuitarType, Product} from "@backend/shared/app-types";
import {guitarTypes, stringsCount} from "./product.constant";

@Schema({
  collection: 'product',
  timestamps: true
})
export class ProductModel extends Document implements Product {
  @Prop({
    required: true,
    maxlength: 100,
    minlength: 10
  })
  title: string;

  @Prop({
    required: true,
    maxlength: 1024,
    minlength: 20
  })
  description: string;

  @Prop({
    required: true,
  })
  date: Date;

  @Prop({
    required: true,
    match: /\.(jpg|png)$/
  })
  photo: `${string}${'jpg' | 'png'}`;

  @Prop({
    required: true,
    enum: guitarTypes
  })
  type: GuitarType;

  @Prop({
    required: true,
    maxlength: 40,
    minlength: 5
  })
  article: string;

  @Prop({
    required: true,
    enum: stringsCount
  })
  countStrings: CountStringsType;

  @Prop({
    required: true,
    max: 100_000_000,
    min: 100
  })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
