import * as tarefasController from '../controllers/tarefasController.js';
import express from 'express';

const router = express.Router();

router.post('/', tarefasController.criarTarefa);
router.get('/', tarefasController.listarTarefas);
router.get('/:objectId', tarefasController.obterTarefa);
router.put('/:objectId', tarefasController.atualizarTarefa);
router.delete('/:objectId', tarefasController.excluirTarefa);

export default router;

// feito