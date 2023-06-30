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

routerFinanceiro.put('/:idFinanceiro', async (req, res) => {
    const id = parseInt(req.params.idFinanceiro);
    const {comprar, vender, fiscal, relatorioCompra, relatorioVenda } = req.body;
    const financeiro = await financeiroCtrl.recuperarAtualizarPorId({id: id , comprar: comprar, vender: vender, fiscal: fiscal, relatorioCompra: relatorioCompra, relatorioVenda: relatorioVenda});
    res.json(financeiro);
});

/**
 * Serviço para deletar determinado Financeiro
 */
 routerFinanceiro.delete('/:idFinanceiro', async (req, res) => {
    const id = parseInt(req.params.idFinanceiro);
    const financeiro = await financeiroCtrl.deletaPorId(id);
    res.json(financeiro);
});