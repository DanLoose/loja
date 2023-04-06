import { IsEmail, IsNotEmpty, ValidateNested, IsArray, IsNumber, IsString, Min, MaxLength, ArrayMinSize } from "class-validator";
import { CaracteristicaProdutoDTO } from "./CaracteristicaProduto.DTO";
import { ImagensProdutoDTO } from "./ImagensProduto.DTO";
import { Type } from "class-transformer";

export class CriaProdutoDTO {

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsNumber({
        maxDecimalPlaces: 2,
        allowNaN: false,
        allowInfinity: false
    })
    @Min(1)
    valor: number;

    @IsNumber()
    @Min(0)
    quantidadeDisponível: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(1000)
    descricao: string

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImagensProdutoDTO)
    imagens: ImagensProdutoDTO[];

    @IsString()
    @IsNotEmpty()
    categoria: string;

}