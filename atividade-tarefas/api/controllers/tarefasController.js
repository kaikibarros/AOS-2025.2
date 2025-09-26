import { v4 as uuidv4 } from 'uuid';

export const listarTarefas = (req, res) => {

  return res.send(Object.values(req.context.models.tarefas));
};

export const obterTarefa = (req, res) => {
  const tarefa = req.context.models.tarefas[req.params.objectId];
  if (!tarefa) {
    return res.status(404).send('Tarefa não encontrada.');
  }
  return res.send(tarefa);
};

export const criarTarefa = (req, res) => {

  if (!req.body.descricao) {
    return res.status(400).send('A descrição é obrigatória.');
  }

  const objectId = uuidv4();
  const novaTarefa = {
    objectId,
    descricao: req.body.descricao,
    concluida: req.body.concluida || false, // Valor padrão é 'false'
  };

  req.context.models.tarefas[objectId] = novaTarefa;

  return res.send(novaTarefa);
};


export const atualizarTarefa = (req, res) => {
  const tarefa = req.context.models.tarefas[req.params.objectId];
  if (!tarefa) {
    return res.status(404).send('Tarefa não encontrada.');
  }

  if (req.body.descricao) {
    tarefa.descricao = req.body.descricao;
  }
  if (typeof req.body.concluida === 'boolean') {
    tarefa.concluida = req.body.concluida;
  }

  return res.send(tarefa);
};


export const excluirTarefa = (req, res) => {
  const { objectId } = req.params;


  if (!req.context.models.tarefas[objectId]) {
    return res.status(404).send({ mensagem: 'Tarefa não encontrada.' });
  }

  delete req.context.models.tarefas[objectId];

  return res.status(204).send();
};