import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import {CountStringsType, GuitarType, Product} from "@backend/shared/app-types";

export class ProductRdo implements Product {

    @ApiProperty({
        description: 'Product unique id',
        example: '123ed31ercef4124',
    })
    @Expose({name: '_id'})
    _id?: string;

    @ApiProperty({
        description: 'Product title',
        example: 'Bass rockstar guitar',
    })
    @Expose()
    title: string;

    @ApiProperty({
        description: 'Product description',
    })
    @Expose()
    description: string;

    @ApiProperty({
        description: 'Product date add to catalog',
    })
    @Expose()
    date: Date;

    @ApiProperty({
        description: 'Product photo',
    })
    @Expose()
    photo: `${string}${'jpg' | 'png'}`;

    @ApiProperty({
        description: 'Guitar type',
    })
    @Expose()
    type: GuitarType;

    @ApiProperty({
        description: 'Product article',
    })
    @Expose()
    article: string;


    @ApiProperty({
        description: 'Guitar strings count',
    })
    @Expose()
    countStrings: CountStringsType;


    @ApiProperty({
        description: 'Guitar price',
    })
    @Expose()
    price: number;
}
