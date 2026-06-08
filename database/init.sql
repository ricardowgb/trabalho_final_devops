CREATE TABLE IF NOT EXISTS pedidos (
  id SERIAL PRIMARY KEY,
  descricao VARCHAR(255) NOT NULL,
  criado_em TIMESTAMP DEFAULT NOW()
);

INSERT INTO pedidos (descricao) VALUES
  ('Pedido de teste 1'),
  ('Pedido de teste 2');
