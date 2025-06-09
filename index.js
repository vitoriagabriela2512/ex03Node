const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/usuario", (req, res) => {
  const { nome, idade } = req.body;

  if (!nome || idade === undefined) {
    return res.status(400).json({ erro: "Nome e idade são obrigatórios."});
  }

  if (idade < 0) {
    return res.status(400).json({ erro: "Idade não pode ser menor que 0." });
  }

  res.status(201).json({ mensagem: `Usuário ${nome} com idade ${idade} cadastrado com sucesso!` });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});