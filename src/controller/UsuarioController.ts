import { Usuario } from "../entity/Usuario";
import { AppDataSource } from "../data-source";
import { UsuarioModel } from '../model/usuarioModel';

export class UsuarioController {

    async salvar(usuario: Usuario) {
        const usuarioSalvo = await AppDataSource.manager.save(usuario);
        return usuarioSalvo;
    }

    async recuperarTodos() {
        const usuarios = await AppDataSource.manager.find(Usuario);
        return usuarios;
    }

    async deletaPorId(idUsuario: number) {
            const usuario = await  AppDataSource.manager.createQueryBuilder().delete().from(Usuario).where("id = :id", { id: idUsuario }).execute();
            return usuario;
    }

    async recuperarAtualizarPorId(usuario: UsuarioModel) {
        const usuarioResponse = await AppDataSource.manager.createQueryBuilder()
        .update(Usuario).set(usuario)
        .where("id = :id", { id: usuario.id })
        .execute()
        return usuarioResponse;
    }

}