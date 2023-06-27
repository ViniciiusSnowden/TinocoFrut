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


