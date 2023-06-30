import { Estoque } from "../entity/Estoque";
import { AppDataSource } from "../data-source";
import { EstoqueModel } from "../model/EstoqueModel";

export class EstoqueController {

    async salvar(estoque: Estoque) {
        const EstoqueSalvo = await AppDataSource.manager.save(Estoque);
        return EstoqueSalvo;
    }

    async recuperarTodos() {
        const estoques = await AppDataSource.manager.find(Estoque);
        return estoques;
    }


    async deletaPorId(idEstoque: number) {
            const estoque = await  AppDataSource.manager.createQueryBuilder().delete().from(Estoque).where("id = :id", { id: idEstoque }).execute();
            return estoque;
    }

    async recuperarAtualizarPorId(estoque: EstoqueModel) {
        const estoqueResponse = await AppDataSource.manager.createQueryBuilder()
        .update(Estoque).set(estoque)
        .where("id = :id", { id: estoque.id })
        .execute()
        return estoqueResponse;
    }

}