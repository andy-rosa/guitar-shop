import { IsIn, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import {
  guitarTypes,
  QueryDefault, stringsCount

} from '../product.constant';
import {CountStringsType, GuitarType} from "@backend/shared/app-types";

export class ProductQuery {
  @Transform(({ value } ) => +value || QueryDefault.Limit)
  @IsNumber()
  @IsOptional()
  public limit = QueryDefault.Limit;

  @IsIn(['asc', 'desc'])
  @IsOptional()
  public sortDirection: 'desc' | 'asc' = QueryDefault.Direction;

  @IsIn(['price', 'date'])
  @IsOptional()
  public sortType: 'price' | 'date';


  @IsIn(guitarTypes)
  @IsOptional()
  public type: GuitarType;

  @IsIn(stringsCount)
  @IsOptional()
  public countStrings: CountStringsType;

  @Transform(({ value }) => +value)
  @IsOptional()
  public page: number = QueryDefault.Page;
}
