# 🚀 PedidoFácil — Sistema de Pedidos Online

Startup fictícia com sistema de pedidos desenvolvido com React, Node.js e PostgreSQL.

---

## 🛠️ Tecnologias

- Frontend: React
- Backend: Node.js + Express
- Banco de Dados: PostgreSQL
- Containers: Docker + Docker Compose
- CI/CD: GitHub Actions
- Testes: Jest + Supertest

---

## ▶️ Como executar

### Pré-requisitos
- Docker Desktop instalado
- Arquivo `.env` criado na raiz

### Configurar o .env
Crie um arquivo `.env` baseado no `.env.example`

### Subir os containers
```bash
docker compose up --build
```

Acesse:
- Frontend: http://localhost:3000
- API: http://localhost:3001

---

## 🧪 Como testar

```bash
cd backend
npm install
npm test
```

---

## 🔄 Como executar a pipeline

A pipeline executa automaticamente ao fazer push para `main` ou `develop`.

Para disparar manualmente:
```bash
git add .
git commit -m "fix: descricao da alteracao"
git push origin develop
```

Acompanhe em: **GitHub → Actions**

---

## 🐳 Comandos Docker úteis

```bash
docker compose up --build    # sobe todos os containers
docker compose down          # derruba todos os containers
docker ps                    # lista containers rodando
docker compose logs backend  # logs do backend
docker compose logs db       # logs do banco
```

---

## 🔧 Correções realizadas

| Problema | Solução |
|---|---|
| Backend não conectava ao banco | `depends_on` com `healthcheck` no db |
| Frontend com URL fixa | Variável `REACT_APP_API_URL` via `.env` |
| Containers subindo fora de ordem | `condition: service_healthy` |
| Banco perdendo dados | Volume persistente `postgres_data` |
| Senhas expostas no código | Arquivo `.env` + `.gitignore` + GitHub Secrets |
| Pipeline CI falhando | Workflow corrigido com jobs encadeados |
| Sem testes automatizados | Jest + Supertest implementados |
| Sem rollback | Rollback implementado no job de deploy |

---

## 👥 Equipe

- Ricardo Wesgueber 2514290038 — Docker Compose e infraestrutura
- Káthia Faria 2514290053 — Backend, banco de dados e testes
- Breno Brandão 2514290011 — CI/CD, segurança e deploy
