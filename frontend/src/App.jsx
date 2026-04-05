import React, { useState, useEffect } from 'react';

function App() {
  const [recursos, setRecursos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/recursos')
      .then(res => res.json())
      .then(data => setRecursos(data));
  }, []);

  return (
    <div className="App">
      <h1>Panel de Gestión de la Empresa</h1>
      <ul>
        {recursos.map(r => <li key={r._id}>{r.nombre} - {r.estado}</li>)}
      </ul>
    </div>
  );
}

export default App;