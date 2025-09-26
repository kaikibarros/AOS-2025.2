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
app.get('/', (req, res) => res.send('<h1>API de Tarefas</h1>'));

app.use('/tarefas', tarefasRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server rodando na porta: ${PORT}`);
});

