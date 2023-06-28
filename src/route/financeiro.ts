import { Financeiro } from '../entity/Financeiro';
import { Router } from 'express';
import { FinanceiroController } from '../controller/FinanceiroController';

export const routerFinanceiro= Router();
const financeiroCtrl = new FinanceiroController();

/**
 * Serviço pra salvar um novo dado financeiro
 */
routerFinanceiro.post('/', async (req, res) => {
    const { comprar, vender, fiscal, relatorio_compra, relatorio_venda} = req.body;

    const financeiro= new Financeiro(comprar, vender, fiscal, relatorio_compra, relatorio_venda);

    const usuarioSalvo = await financeiroCtrl.salvar(financeiro);
    res.json(usuarioSalvo);
    
});


/**
 * Serviço para recuperar todos os dados financeiros
 */
routerFinanceiro.get('/', async (req, res) => {
    const usuarios = await financeiroCtrl.recuperarTodos();
    res.json(usuarios);
});

/**
 * Serviço para recuperar os lançamentos de um determinado dado financeiro
 */
routerFinanceiro.get('/lancamentos/:idUsuario', async (req, res) => {
    // const idUsuario = parseInt(req.params.idUsuario);
    // const lancamentos = await usuarioCtrl.recuperarLancamentosDoUsuario(idUsuario);
    // res.json(lancamentos);
});