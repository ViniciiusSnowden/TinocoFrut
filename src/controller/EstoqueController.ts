import { Estoque } from "../entity/Estoque";
import { AppDataSource } from "../data-source";

export class EstoqueController {

    async salvar(usuario: Estoque) {
        const EstoqueSalvo = await AppDataSource.manager.save(Estoque);
        return EstoqueSalvo;
    }

    async recuperarTodos() {
        const Estoques = await AppDataSource.manager.find(Estoque);
        return Estoques;
    }

}