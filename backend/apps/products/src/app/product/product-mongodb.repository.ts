import {Injectable} from "@nestjs/common";
import {ProductEntity} from "./product.entity";
import {ProductQuery} from "./query/product.query";
import {Product} from "@backend/shared/app-types";
import {Model} from "mongoose";
import {ProductModel} from "./product.model";
import {GUITAR_NAME} from "./product.constant";
import {InjectModel} from "@nestjs/mongoose";
import {CRUDRepository} from "@backend/util/util-types";

@Injectable()
export class ProductDBRepository implements CRUDRepository<ProductEntity, number, Product> {
 constructor(
   @InjectModel(GUITAR_NAME) private readonly productModel: Model<ProductModel>
 ) {}

  public async create(item: ProductEntity): Promise<Product> {
  const newProduct = new this.productModel(item);
  return newProduct.save();
  }

  public async destroy(id: number): Promise<void> {
   this.productModel.deleteOne({id});
  }

  public findById(id: number): Promise<Product | null> {
      return this.productModel
          .findOne({_id: id})
          .exec();
  }

  public find({ limit, page, type, sortType, sortDirection, countStrings }: ProductQuery): Promise<Product[]> {
    return this.productModel
        .find()
        .exec()
  }

  public update(id: number, item: ProductEntity): Promise<Product> {
    return this.productModel
        .findByIdAndUpdate(id, item, {new: true})
        .exec()
  }
}
