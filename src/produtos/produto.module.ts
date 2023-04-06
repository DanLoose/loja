import { Module } from "@nestjs/common";
import { UsuarioController } from "./produto.controller";
import { UsuarioRepository } from "./produto.repository";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository]
})

export class UsuarioModule { }