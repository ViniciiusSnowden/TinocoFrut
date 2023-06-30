import { RecursosHumanos } from '../entity/RecursosHumanos';
import { Router } from 'express';
import { RecursosHumanosController } from '../controller/RecursosHumanosController';
import { RecursosHumanosModel } from '../model/RecursosHumanosModel';

export const routerRecursosHumanos = Router();
const RecursosHumanosCtrl = new RecursosHumanosController();

/**
 * Serviço pra salvar um novo usuário
 */
routerRecursosHumanos.post('/', async (req, res) => {
    const { funcionario, salario, cargaHoraria, folhaPonto, setor, } = req.body;
    const recursosHumanos = new RecursosHumanos(funcionario, salario, cargaHoraria, folhaPonto, setor);
    const recursosHumanosSalvo = await RecursosHumanosCtrl.salvar(recursosHumanos);
    res.json(recursosHumanosSalvo);
    
});

/*
 * Serviço para recuperar todos os usuários
 */
routerRecursosHumanos.get('/', async (req, res) => {
    const RecursosHumanoss = await RecursosHumanosCtrl.recuperarTodos();
    res.json(RecursosHumanoss);
});

/**
 * Serviço para Autalizar de um determinado usuário
 */
routerRecursosHumanos.put('/:idRecursosHumanos', async (req, res) => {
    const idRecursosHumanos = parseInt(req.params.idRecursosHumanos);
    const { funcionario, salario, cargaHoraria, folhaPonto, setor} = req.body;
    const lancamentos = await RecursosHumanosCtrl.recuperarAtualizarPorId({id: idRecursosHumanos ,funcionario: funcionario, salario: salario, cargaHoraria: cargaHoraria, folhaPonto: folhaPonto, setor: setor});
    res.json(lancamentos);
});

/**
 * Serviço para deletar determinado usuário
 */
routerRecursosHumanos.delete('/:idRecursosHumanos', async (req, res) => {
    const idRecursosHumanos = parseInt(req.params.idRecursosHumanos);
    const RecursosHumanos = await RecursosHumanosCtrl.deletaPorId(idRecursosHumanos);
    res.json(RecursosHumanos);
});