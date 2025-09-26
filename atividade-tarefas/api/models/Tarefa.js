let tarefas = {};

export default tarefas;


// // /models/Tarefa.js: Define o modelo de dados para uma tarefa. Embora não usemos um banco de dados neste exemplo para simplificar, essa camada é crucial para validação e definição da estrutura.
// const tarefas = [];
//   const tarefaIndex = tarefas.findIndex(t => t.objectId === objectId);
  
//   if (tarefaIndex === -1) {
//     return res.status(404).json({ erro: 'Tarefa não encontrada.' });
//   }
  
//   tarefas.splice(tarefaIndex, 1);
//   res.json({ mensagem: 'Tarefa deletada com sucesso.' });

// import { v4 as uuidv4 } from 'uuid';

// export const criarTarefa = (req, res) => {
//   const { descricao, concluida = false } = req.body;
  
//   if (!descricao) {
//     return res.status(400).json({ erro: 'A descrição é obrigatória.' });
//   }
  
//   const novaTarefa = {
//     objectId: uuidv4(),
//     descricao,
//     concluida
//   };
  
//   tarefas.push(novaTarefa);
//   res.status(201).json(novaTarefa);
// };

// export const listarTarefas = (req, res) => {
//   res.json(tarefas);
// };

// export const obterTarefaPorId = (req, res) => {
//   const { objectId } = req.params;
//   const tarefa = tarefas.find(t => t.objectId === objectId);
  
//   if (!tarefa) {
//     return res.status(404).json({ erro: 'Tarefa não encontrada.' });
//   }    
//     res.json(tarefa);
// }


// // refazer

