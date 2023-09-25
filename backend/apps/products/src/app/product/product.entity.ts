import {CountStringsType, GuitarType, Product} from "@backend/shared/app-types";
import {Entity} from "@backend/util/util-types";

export class ProductEntity extends Entity<Product> {
  _id?: string;
  title: string;
  description: string;
  date: Date;
  photo: `${string}${'jpg' | 'png'}`;
  type: GuitarType;
  article: string;
  countStrings: CountStringsType;
  price: number;

  constructor(product: Product) {
    super(product);
  }
}
