import { Produto } from "../entity/Produto";
import { AppDataSource } from "../data-source";
import { ProdutoModel } from "../model/ProdutoModel";

export class ProdutoController {

    async salvar(produto: Produto) {
        const produtoSalvo = await AppDataSource.manager.save(produto);
        return produtoSalvo;
    }

    async recuperarTodos() {
        const produtos = await AppDataSource.manager.find(Produto);
        return produtos;
    }
    
    async deletaPorId(idProduto: number) {
            const produto = await  AppDataSource.manager.createQueryBuilder().delete().from(Produto).where("id = :id", { id: idProduto }).execute();
            return produto;
    }

    async recuperarAtualizarPorId(produto: ProdutoModel) {
        const produtoResponse = await AppDataSource.manager.createQueryBuilder()
        .update(Produto).set(produto)
        .where("id = :id", { id: produto.id })
        .execute()
        return produtoResponse;
    }


}