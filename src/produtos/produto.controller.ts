import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController {

    private produtoRepository = new ProdutoRepository()

    @Post()
    async criaProduto(@Body() dadosDoProduto) {

        this.produtoRepository.salvar(dadosDoProduto);
        return dadosDoProduto;
    }

    @Get()
    async listaProdutos() {
        return this.produtoRepository.listar();
    }

}