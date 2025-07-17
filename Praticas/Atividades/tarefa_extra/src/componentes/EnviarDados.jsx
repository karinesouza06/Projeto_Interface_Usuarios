import { useState } from "react";
import './EffectAPI.css';

export default function EnviarDados() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    city: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Substitua pela URL da sua API desenvolvida em Programação Orientada a Serviços
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log("Resposta da API:", data);
      setMessage('Dados enviados com sucesso!');
      setFormData({ name: '', username: '', city: '' }); // Limpa o formulário
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      setMessage('Falha ao enviar dados. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="table-container2">
      <h2>Envio de Dados</h2>
      
      {message && <p style={{ color: message.includes('sucesso') ? 'green' : 'red' }}>{message}</p>}
      
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '10px 0' }}>
          <label>
            Nome:
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome"
              required
            /> 
          </label>
        </div>

        <div style={{ margin: '10px 0' }}>
          <label>
            Username:
            <input 
              type="text" 
              name="username" 
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
          </label>
        </div>

        <div style={{ margin: '10px 0' }}>
          <label>
            Cidade:
            <input 
              type="text" 
              name="city" 
              value={formData.city}
              onChange={handleChange}
              placeholder="Cidade"
              required
            />
          </label>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
}