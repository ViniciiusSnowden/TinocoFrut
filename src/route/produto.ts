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
 * Serviço para recuperar os lançamentos de um determinado Produto
 */
/**
 * Serviço para Autalizar de um determinado Produto
 */
 routerProduto.put('/:idProduto', async (req, res) => {
    const id = parseInt(req.params.idProduto);
    const {nome, descricao, preco, categoria, tipo, quantidadeEstoque,} = req.body;
    const produto = await produtoCtrl.recuperarAtualizarPorId({id: id , nome: nome, descricao: descricao,preco: preco, categoria: categoria, tipo: tipo, quantidadeEstoque: quantidadeEstoque});
    res.json(produto);
});

/**
 * Serviço para deletar determinado Produto
 */
routerProduto.delete('/:idProduto', async (req, res) => {
    const id = parseInt(req.params.idProduto);
    const produto = await produtoCtrl.deletaPorId(id);
    res.json(produto);
});