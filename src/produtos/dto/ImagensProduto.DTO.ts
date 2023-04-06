import { IsString } from "class-validator";

export class ImagensProdutoDTO {
    @IsString()
    url: string;

    @IsString()
    descricao: string;
}