import { Estoque } from '../entity/Estoque';
import { Router } from 'express';
import { EstoqueController } from '../controller/EstoqueController';

export const routerEstoque = Router();
const estoqueCtrl = new EstoqueController();

/**
 * Serviço pra salvar no estoque
 */
routerEstoque.post('/', async (req, res) => {
    const { setor, corredor, prateleira, produto } = req.body;

    const estoque = new Estoque(setor, corredor, prateleira, produto);

    const estoqueSalvo = await estoqueCtrl.salvar(estoque);
    res.json(estoqueSalvo);
    
});

/**
 * Serviço para recuperar todos os usuários
 */
 routerEstoque.get('/', async (req, res) => {
    const estoque = await estoqueCtrl.recuperarTodos();
    res.json(estoque);
});

/**
 * Serviço para Autalizar de um determinado usuário
 */
 routerEstoque.put('/:idestoque', async (req, res) => {
    const idestoque = parseInt(req.params.idestoque);
    const { setor , corredor , prateleira, produto } = req.body;
    const lancamentos = await estoqueCtrl.recuperarAtualizarPorId({id: idestoque , setor: setor , corredor: corredor, prateleira: prateleira, produto: produto });
    res.json(lancamentos);
});

/**
 * Serviço para deletar determinado usuário
 */
 routerEstoque.delete('/:idEstoque', async (req, res) => {
    const idestoque = parseInt(req.params.idEstoque);
    const estoque = await estoqueCtrl.deletaPorId(idestoque);
    res.json(estoque);
});
