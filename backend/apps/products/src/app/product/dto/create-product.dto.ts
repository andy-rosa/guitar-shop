import {ApiProperty} from "@nestjs/swagger";
import {IsDate, IsEnum, IsInt, IsNotEmpty, IsString, Matches, Max, MaxLength, Min, MinLength} from "class-validator";
import {CountStringsType, GuitarType, Product} from "@backend/shared/app-types";

export class CreateProductDto implements Product{
    @ApiProperty({
        description: 'Product title',
        example: ''
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(100)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(20)
    @MaxLength(1024)
    description: string;

    @IsDate()
    @IsNotEmpty()
    date: Date;

    @IsString()
    @IsNotEmpty()
    @Matches(/\.(jpg|png)$/)
    photo: `${string}${'jpg' | 'png'}`;

    @IsString()
    @IsNotEmpty()
    type: GuitarType;

    @IsString()
    @IsNotEmpty()
    article: string;

    @IsEnum([4, 6, 7, 12])
    @IsNotEmpty()
    countStrings: CountStringsType;

    @IsInt()
    @Min(100)
    @Max(100_000_000)
    @IsNotEmpty()
    price: number;
}
