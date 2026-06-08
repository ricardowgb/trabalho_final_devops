const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o banco via variável de ambiente
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Endpoint /health — para healthcheck e testes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

//  Lista todos os pedidos
app.get('/pedidos', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM pedidos ORDER BY id DESC'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar pedidos' });
  }
});

// Cria um novo pedido
app.post('/pedidos', async (req, res) => {
  const { descricao } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO pedidos (descricao) VALUES ($1) RETURNING *',
      [descricao]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar pedido' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});

module.exports = app; // necessário para os testes