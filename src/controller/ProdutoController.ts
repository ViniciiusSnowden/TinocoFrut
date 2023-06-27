import { Produto } from "../entity/Produto";
import { AppDataSource } from "../data-source";

export class ProdutoController {

    async salvar(produto: Produto) {
        const usuarioSalvo = await AppDataSource.manager.save(produto);
        return usuarioSalvo;
    }

    async recuperarTodos() {
        const usuarios = await AppDataSource.manager.find(Produto);
        return usuarios;
    }

}