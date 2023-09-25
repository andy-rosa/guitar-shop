import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import {ProductService} from "./product.service";
import {HttpStatusCode} from "axios";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {ProductQuery} from "./query/product.query";
import {CreateProductDto} from "./dto/create-product.dto";
import {ProductRdo} from "./rdo/product.rdo";
import {fillObject} from "@backend/util/util-core";

@ApiTags('product')
@Controller('catalog')
export class ProductController {
  constructor(
    private readonly productService: ProductService
  ) {}


  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Product has been successfully created.',
  })
  @Post()
  public async create(
    @Headers() headers: {userID: string},
    @Body() body: CreateProductDto
  ): Promise<ProductRdo> {
    const product =  await this.productService.create(body);
    return fillObject(ProductRdo, product);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Passed a list of products by search parameters',
    isArray: true,
  })
  @Get()
  public async index(
    @Query() query: ProductQuery
    ): Promise<ProductRdo[]> {
      const products = await this.productService.index(query);
      return products.map(product => fillObject(ProductRdo, product));
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Passed a product by id',
  })
  @Get(':id')
  public async show(
    @Param('id', ParseIntPipe) id: number
  ) {
    const product = await this.productService.findById(id);
    return fillObject(ProductRdo, product);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Product has been successfully deleted.',
  })
  @Delete(':id')
  @HttpCode(HttpStatusCode.Ok)
  public async delete(
    @Param('id', ParseIntPipe) id: number,
  ) {
    await this.productService.delete(id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Product has been successfully updated.',
  })
  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateProductDto
  ) {
    const updateProduct = await this.productService.update(id, body);
    return fillObject(ProductRdo, updateProduct);
  }
}


