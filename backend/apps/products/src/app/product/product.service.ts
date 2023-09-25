import {Injectable} from "@nestjs/common";
import {ProductEntity} from "./product.entity";
import {ProductQuery} from "./query/product.query";
import {ProductDBRepository} from "./product-mongodb.repository";
import {CreateProductDto} from "./dto/create-product.dto";

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductDBRepository
  ) {}

  public async create(body: CreateProductDto) {
    const newProduct = new ProductEntity({
      ...body
    });

    return this.productRepository.create(newProduct);
  }

  public async index(query?: ProductQuery) {
    return this.productRepository.find(query);
  }

  public async findById(id: number) {
    return this.productRepository.findById(id);
  }

  public async delete(id: number) {
    return this.productRepository.destroy(id);
  }

  public async update(id: number, body: CreateProductDto) {
    const product = await this.productRepository.findById(id);

    const updateBlog = new ProductEntity({
      ...product,
      ...body,
    })

    return this.productRepository.update(id, updateBlog);
  }
}
