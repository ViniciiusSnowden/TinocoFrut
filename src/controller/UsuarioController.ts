import { getManager } from "typeorm";
import { Usuario } from "../entity/Usuario";
import { AppDataSource } from "../data-source";

export class UsuarioController {

    async salvar(usuario: Usuario) {
        const usuarioSalvo = await getManager().save(usuario);
        return usuarioSalvo;
    }

    async recuperarTodos() {
        const usuarios = await AppDataSource.manager.find(Usuario);
        return usuarios;
    }

    async recuperarPorId(id: number) {
        // const usuario = await getManager().findOne(Usuario, id);
        // return usuario;
    }

    // async recuperarLancamentosDoUsuario(id: number) {
    //     const usuario = await getManager().findOne(Usuario, id, {
    //         relations: ['lancamentos']
    //     });
    //     return usuario.lancamentos;
    // }
}