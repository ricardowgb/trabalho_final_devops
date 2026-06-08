import { useEffect, useState } from 'react';

function App() {
  const [pedidos, setPedidos] = useState([]);
  const [status, setStatus] = useState('Carregando...');

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then(res => res.json())
      .then(() => setStatus('✅ API conectada'))
      .catch(() => setStatus('❌ API fora do ar'));

    fetch(`${API_URL}/pedidos`)
      .then(res => res.json())
      .then(data => setPedidos(data))
      .catch(() => setPedidos([]));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Sistema de Pedidos</h1>
      <p>Status da API: {status}</p>
      <h2>Pedidos:</h2>
      <ul>
        {pedidos.map(p => (
          <li key={p.id}>{p.descricao}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
