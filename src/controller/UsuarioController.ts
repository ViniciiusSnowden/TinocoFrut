import { Usuario } from "../entity/Usuario";
import { AppDataSource } from "../data-source";

export class UsuarioController {

    async salvar(usuario: Usuario) {
        const usuarioSalvo = await AppDataSource.manager.save(usuario);
        return usuarioSalvo;
    }

    async recuperarTodos() {
        const usuarios = await AppDataSource.manager.find(Usuario);
        return usuarios;
    }

    async DeletaPorId(idUsuario: number) {
         if(this.recuperarPorId(idUsuario)){
            const usuario = await  AppDataSource.manager.createQueryBuilder().delete().from(Usuario).where("id = :id", { id: idUsuario }).execute();
            return usuario;
         };
    }

    async recuperarPorId(usuarioId: number) {
        const usuarioResponse = await AppDataSource.manager.findOne(Usuario ,{
            where: {  id: 7}, lock: { mode: "optimistic", version: 1 }
        })
        return usuarioResponse;
    }

}