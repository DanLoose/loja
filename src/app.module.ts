import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuarios/usuarios.module';
import { ProdutoModule } from './produtos/produto.module';
@Module({
  imports: [UsuarioModule, ProdutoModule]
})
export class AppModule { }
