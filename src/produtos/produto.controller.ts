import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CriaProdutoDTO } from "./dto/CriaProduto.DTO";

@Controller('/produtos')
export class ProdutoController {

    private produtoRepository = new ProdutoRepository()

    @Post()
    async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO) {

        this.produtoRepository.salvar(dadosDoProduto);
        return dadosDoProduto;
    }

    @Get()
    async listaProdutos() {
        return this.produtoRepository.listar();
    }

}