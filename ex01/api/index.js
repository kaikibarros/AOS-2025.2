import "dotenv/config";
import express from "express";

console.log("Iniciando servidor..");
console.log("MY_SECRET", process.env.MY_SECRET);
console.log("PYTHON_ROOT", process.env.MY_OTHER_SECRET);

const app = express();

app.get("/", (req, res) => {
  res.send("padrão");
});

app.get("/random", (req, res) => {
  return res.json("number:", Math.floor(Math.random(1000000) + 1));
});

const frases = [
  "love your life",
  "tamo junto",
  "é isso",
  "será",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

app.get("/inspiration", (req, res) => {
  //aaaaa

  return res.json(
    quote,
    "O sucesso é a soma de pequenos esforços repetidos dia após dia"
  );
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log("Servidor rodando na porta 3000");
  console.log("Acesse http://localhost:3000/");
});