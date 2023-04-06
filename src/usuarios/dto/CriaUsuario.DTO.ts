import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CriaUsuarioDTO {

    @IsNotEmpty({ message: "O nome não pode ser vazio" })
    nome: string;

    @IsEmail(undefined, { message: "O email deve ser um email" })
    email: string;

    @MinLength(6, { message: "A senha deve ter pelo menos 6 caracteres" })
    senha: string;
}