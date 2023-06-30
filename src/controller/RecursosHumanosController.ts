import { AppDataSource } from "../data-source";
import { RecursosHumanos } from '../entity/RecursosHumanos';
import { RecursosHumanosModel } from "../model/RecursosHumanosModel";

export class RecursosHumanosController {

    async salvar( recursosHumanos:  RecursosHumanos) {
        const recursosHumanossalvo = await AppDataSource.manager.save( recursosHumanos);
        return  recursosHumanossalvo;
    }

    async recuperarTodos() {
        const  recursosHumanoss = await AppDataSource.manager.find(RecursosHumanos);
        return  recursosHumanoss;
    }

    async deletaPorId(idRecursosHumanos: number) {
        const recursosHumanosRes = await  AppDataSource.manager.createQueryBuilder().delete().from(RecursosHumanos).where("id = :id", { id: idRecursosHumanos }).execute();
        return recursosHumanosRes;
    }

    async recuperarAtualizarPorId(recursosHumanos: RecursosHumanosModel) {
        const recursosHumanosResponse = await AppDataSource.manager.createQueryBuilder()
        .update(RecursosHumanos).set(recursosHumanos)
        .where("id = :id", { id: recursosHumanos.id })
        .execute()
        return recursosHumanosResponse;
    }

}