import { useState, useEffect } from 'react';
import './EffectAPI.css'

export default function EffectAPI() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsuarios = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <>  
      <h1>Lista de Usuários</h1>

      {loading && <p>Carregando dados...</p>}

      <div>
        <table className="table-container1">
          <thead>
            <tr>
              <th>Name</th>    
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.name}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
          <button onClick={fetchUsuarios}>Resgatar dados</button>
        </table>
      </div>

      <div>
        <table className="table-container2">
          <thead>
            <tr>
              <th>Username</th>  
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.username}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
          <button onClick={fetchUsuarios}>Resgatar dados</button>
        </table>
      </div>

      <div>
        <table className="table-container3">
          <thead>
            <tr>
              <th>Cidade do Usuário</th>  
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.address.city}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
          <button onClick={fetchUsuarios}>Resgatar dados</button>
        </table>
      </div>
    </>
  );
}