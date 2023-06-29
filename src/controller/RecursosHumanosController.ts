import { AppDataSource } from "../data-source";
import { RecursosHumanos } from '../entity/RecursoHumanos';

export class RecursosHumanosController {

    async salvar( recursosHumanos:  RecursosHumanos) {
        const recursosHumanossalvo = await AppDataSource.manager.save( recursosHumanos);
        return  recursosHumanossalvo;
    }

    async recuperarTodos() {
        const  recursosHumanoss = await AppDataSource.manager.find( RecursosHumanos);
        return  recursosHumanoss;
    }

    // async recuperarPorId(id: number) {
    //     const  RecursosHumanos = await AppDataSource.manager.findOne( RecursosHumanos, id);
    //     return  RecursosHumanos;
    // }

    // async recuperarLancamentosDo RecursosHumanos(id: number) {
    //     const  RecursosHumanos = await getManager().findOne( RecursosHumanos, id, {
    //         relations: ['lancamentos']
    //     });
    //     return usuario.lancamentos;
    // }
}