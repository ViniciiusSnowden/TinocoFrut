import { Usuario } from '../entity/Usuario';
import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController';
import { UsuarioModel } from '../model/usuarioModel';

export const routerUsuario = Router();
const usuarioCtrl = new UsuarioController();

/**
 * Serviço pra salvar um novo usuário
 */
routerUsuario.post('/', async (req, res) => {
    const { nome, email, tipo} = req.body;
    const usuario = new Usuario(nome, email, tipo);
    const usuarioSalvo = await usuarioCtrl.salvar(usuario);
    res.json(usuarioSalvo);
    
});


/**
 * Serviço para recuperar todos os usuários
 */
routerUsuario.get('/', async (req, res) => {
    const usuarios = await usuarioCtrl.recuperarTodos();
    res.json(usuarios);
});

/**
 * Serviço para Autalizar de um determinado usuário
 */
routerUsuario.put('/:idUsuario', async (req, res) => {
    const idUsuario = parseInt(req.params.idUsuario);
    const { nome , email, tipo} = req.body;
    const lancamentos = await usuarioCtrl.recuperarAtualizarPorId({id: idUsuario , nome: nome ,email: email,tipo: tipo});
    res.json(lancamentos);
});

/**
 * Serviço para deletar determinado usuário
 */
routerUsuario.delete('/:idUsuario', async (req, res) => {
    const idUsuario = parseInt(req.params.idUsuario);
    const usuario = await usuarioCtrl.deletaPorId(idUsuario);
    res.json(usuario);
});