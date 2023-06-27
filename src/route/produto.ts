import { Produto } from '../entity/Produto';
import { Router } from 'express';
import { ProdutoController } from '../controller/ProdutoController';

export const routerProduto = Router();
const produtoCtrl = new ProdutoController();

/**
 * Serviço pra salvar um novo produto
 */
routerProduto.post('/', async (req, res) => {
    const { nome, descricao, preco, categoria, tipo, quantidadeEstoque} = req.body;

    const produto = new Produto(nome, descricao, preco , categoria, tipo, quantidadeEstoque);

    const usuarioSalvo = await produtoCtrl.salvar(produto);
    res.json(usuarioSalvo);
    
});


/**
 * Serviço para recuperar todos os produtos
 */
routerProduto.get('/', async (req, res) => {
    const usuarios = await produtoCtrl.recuperarTodos();
    res.json(usuarios);
});

/**
 * Serviço para recuperar os lançamentos de um determinado usuário
 */
routerProduto.get('/lancamentos/:idUsuario', async (req, res) => {
    // const idUsuario = parseInt(req.params.idUsuario);
    // const lancamentos = await usuarioCtrl.recuperarLancamentosDoUsuario(idUsuario);
    // res.json(lancamentos);
});