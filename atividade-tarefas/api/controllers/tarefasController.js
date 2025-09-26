import { v4 as uuidv4 } from 'uuid';

// GET /tarefas - Lista todas as tarefas
export const listarTarefas = (req, res) => {
  // Object.values retorna um array com os valores do objeto de tarefas
  return res.send(Object.values(req.context.models.tarefas));
};

// GET /tarefas/:objectId - Retorna uma tarefa específica
export const obterTarefa = (req, res) => {
  const tarefa = req.context.models.tarefas[req.params.objectId];
  if (!tarefa) {
    return res.status(404).send('Tarefa não encontrada.');
  }
  return res.send(tarefa);
};

// POST /tarefas - Cria uma nova tarefa
export const criarTarefa = (req, res) => {
  // Validação: verifica se a descrição foi fornecida
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

// PUT /tarefas/:objectId - Atualiza uma tarefa existente
export const atualizarTarefa = (req, res) => {
  const tarefa = req.context.models.tarefas[req.params.objectId];
  if (!tarefa) {
    return res.status(404).send('Tarefa não encontrada.');
  }

  // Atualiza os campos se eles forem fornecidos na requisição
  if (req.body.descricao) {
    tarefa.descricao = req.body.descricao;
  }
  if (typeof req.body.concluida === 'boolean') {
    tarefa.concluida = req.body.concluida;
  }

  return res.send(tarefa);
};

// DELETE /tarefas/:objectId - Remove uma tarefa
export const excluirTarefa = (req, res) => {
  const { objectId } = req.params;

  // Verifica se a tarefa existe antes de tentar deletar
  if (!req.context.models.tarefas[objectId]) {
    return res.status(404).send({ mensagem: 'Tarefa não encontrada.' });
  }

  // Deleta a propriedade (a tarefa) do objeto principal usando o operador 'delete'
  delete req.context.models.tarefas[objectId];

  // Retorna uma resposta de sucesso sem conteúdo
  return res.status(204).send();
};