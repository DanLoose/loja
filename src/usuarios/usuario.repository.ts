import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioRepository {
    private usuarios: UsuarioEntity[] = [];

    async salvar(usuario: UsuarioEntity) {
        this.usuarios.push(usuario);
    }

    async listar() {
        return this.usuarios;
    }

    private buscaPorId(id: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.id === id
        )

        if (!possivelUsuario) {
            throw new Error("Usuário não existe.");
        }

        return possivelUsuario;
    }

    async atualiza(id: string, dadosNovos: Partial<UsuarioEntity>) {
        const usuario = this.buscaPorId(id);

        Object.entries(dadosNovos).forEach(([chave, valor]) => {
            if (chave !== "id") {
                usuario[chave] = valor;
            }
        })

        return usuario;

    }

    async remove(id: string) {
        const usuario = this.buscaPorId(id);

        this.usuarios = this.usuarios.filter(usuario => {
            usuario => usuario.id !== id
        })

        return usuario;
    }

    async existeEmail(email: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        )

        return possivelUsuario !== undefined;
    }
}