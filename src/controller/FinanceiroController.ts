import { Financeiro } from './../entity/Financeiro';
import { AppDataSource } from "../data-source";
import { FinanceiroModel } from '../model/FinanceiroModel';

export class FinanceiroController {

    async salvar(finaceiro: Financeiro) {
        const finaceiroSalvo = await AppDataSource.manager.save(finaceiro);
        return finaceiroSalvo;
    }

    async recuperarTodos() {
        const finaceiros = await AppDataSource.manager.find(Financeiro);
        return finaceiros;
    }

    async deletaPorId(idFinanceiro: number) {
        const financeiro = await  AppDataSource.manager.createQueryBuilder().delete().from(Financeiro).where("id = :id", { id: idFinanceiro }).execute();
        return financeiro;
    }

    async recuperarAtualizarPorId(financeiro: FinanceiroModel) {
        const financeiroResponse = await AppDataSource.manager.createQueryBuilder()
        .update(Financeiro).set(financeiro)
        .where("id = :id", { id: financeiro.id })
        .execute()
        return financeiroResponse;
    }
    
}