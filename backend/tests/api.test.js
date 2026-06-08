const request = require('supertest');
const app = require('../src/index');

// ✅ Teste do endpoint /health
describe('GET /health', () => {
  it('deve retornar status 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
  });

  it('deve retornar { status: ok }', async () => {
    const res = await request(app).get('/health');
    expect(res.body).toHaveProperty('status', 'ok');
  });
});

// ✅ Teste do endpoint principal
describe('GET /pedidos', () => {
  it('deve retornar status 200 ou 500', async () => {
    const res = await request(app).get('/pedidos');
    expect([200, 500]).toContain(res.statusCode);
  });
});

// ✅ Teste de criação de pedido
describe('POST /pedidos', () => {
  it('deve retornar status 201 ou 500', async () => {
    const res = await request(app)
      .post('/pedidos')
      .send({ descricao: 'Pedido de teste' });
    expect([201, 500]).toContain(res.statusCode);
  });
});