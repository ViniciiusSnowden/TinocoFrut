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

    // async recuperarPorId(id: number) {
    //     const usuario = await AppDataSource.manager.findOne(Usuario, id);
    //     return usuario;
    // }

    // async recuperarLancamentosDoUsuario(id: number) {
    //     const usuario = await getManager().findOne(Usuario, id, {
    //         relations: ['lancamentos']
    //     });
    //     return usuario.lancamentos;
    // }
}