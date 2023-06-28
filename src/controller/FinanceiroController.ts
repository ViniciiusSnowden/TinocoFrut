import { Financeiro } from './../entity/Financeiro';
import { AppDataSource } from "../data-source";

export class FinanceiroController {

    async salvar(finaceiro: Financeiro) {
        const usuarioSalvo = await AppDataSource.manager.save(finaceiro);
        return usuarioSalvo;
    }

    async recuperarTodos() {
        const usuarios = await AppDataSource.manager.find(Financeiro);
        return usuarios;
    }
    
}