// // app.js: Arquivo principal que inicializa o servidor Express e conecta as rotas.
import express from 'express';

import 'dotenv/config';
import cors from 'cors';
import tarefasRoutes from './routes/tarefasRoutes.js';
import tarefas from './models/Tarefa.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  req.context = {
    models: {
      tarefas,
    },
    me: { id: 'user-1' },
  };
  next();
});
app.use('/tarefas', tarefasRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server rodando na porta: ${PORT}`);
});


/*A API deve fornecer os seguintes endpoints:

 POST /tarefas: Cria uma nova tarefa.

 Corpo da Requisição: { "descricao": "String", "concluida": "boolean" }

 Resposta: A tarefa criada, incluindo o objectId gerado. O objectId deve ser um UUID gerado pelo back-end. A descricao é obrigatória, e concluida é opcional, com valor padrão false.

 Validação: Se a descricao não for fornecida, a API deve retornar um erro.

 GET /tarefas: Lista todas as tarefas cadastradas.

 Resposta: Um array de objetos de tarefas.

 GET /tarefas/:objectId: Retorna uma tarefa específica pelo seu ID.

 Parâmetros: objectId (UUID da tarefa).

 Resposta: O objeto da tarefa encontrada.

 Resposta de Erro: Se a tarefa não for encontrada, retorna um erro 404 Not Found.

 PUT /tarefas/:objectId: Atualiza uma tarefa existente.

 Parâmetros: objectId (UUID da tarefa).

 Corpo da Requisição: { "descricao": "String", "concluida": "boolean" } (opcionalmente um ou ambos).

 Resposta: O objeto da tarefa atualizada.

 Validação: Se o objectId não for encontrado, a API deve retornar um erro 404 Not Found.

 DELETE /tarefas/:objectId: Remove uma tarefa.

Parâmetros: objectId (UUID da tarefa).

 Resposta: Uma mensagem de sucesso ou um objeto vazio.

 Resposta de Erro: Se a tarefa não for encontrada, retorna um erro 404 Not Found. */