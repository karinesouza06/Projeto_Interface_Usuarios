import { useState, useEffect } from 'react';

export default function UserList() {
  // Estados do componente:
  const [users, setUsers] = useState([]); // Armazena a lista completa de usuários da API
  const [filteredUsers, setFilteredUsers] = useState([]); // Armazena a lista filtrada de usuários
  const [searchTerm, setSearchTerm] = useState(''); // Armazena o texto digitado no campo de busca
  const [loading, setLoading] = useState(true); // Controla o estado de carregamento (exibe mensagem enquanto os dados são buscados)
  const [error, setError] = useState(null); // Armazena mensagens de erro caso ocorram

  // Efeito para buscar dados da API quando o componente é montado
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Faz a requisição GET para a API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Verifica se a resposta foi bem-sucedida (status 200-299)
        if (!response.ok) {
          // Se não foi, lança um erro
          throw new Error('Falha ao carregar os dados');
        }
        
        // Converte a resposta para JSON
        const data = await response.json();
        
        // Atualiza os estados:
        setUsers(data); // Salva a lista completa de usuários
        setFilteredUsers(data); // Inicialmente, a lista filtrada é igual à lista completa
        setLoading(false); // Finaliza o estado de carregamento
        
      } catch (err) {
        // Em caso de erro:
        setError(err.message); // Armazena a mensagem de erro
        setLoading(false); // Finaliza o carregamento
      }
    };

    // Chama a função para buscar os usuários
    fetchUsers();
  }, []); // O array vazio [] garante que este efeito só executa uma vez (na montagem do componente)

  // Efeito para filtrar os usuários conforme o termo de busca
  useEffect(() => {
    // Se o campo de busca estiver vazio, mostra todos os usuários
    if (searchTerm === '') {
      setFilteredUsers(users);
    } else {
      // Filtra os usuários que atendem ao critério de busca:
      const filtered = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Busca por nome (case-insensitive)
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) || // Busca por email (case-insensitive)
        user.phone.includes(searchTerm) // Busca por telefone (busca exata)
      );
      setFilteredUsers(filtered); // Atualiza a lista filtrada
    }
  }, [searchTerm, users]); // Executa sempre que searchTerm ou users mudarem

  // Handler para atualizar o estado do termo de busca quando o usuário digita
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Atualiza o estado com o valor do input
  };

  // Estado de carregamento: mostra mensagem enquanto os dados são buscados
  if (loading) {
    return <p>Carregando usuários...</p>;
  }

  // Estado de erro: mostra mensagem de erro se ocorrer algum problema
  if (error) {
    return <p>Erro: {error}</p>;
  }

  // Renderização principal do componente
  return (
    <div>
      <h1>Lista de Usuários</h1>
      
      {/* Campo de busca */}
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar por nome, email ou telefone"
        />
      </div>

      {/* Área de exibição dos usuários */}
      <div>
        {/* Verifica se há usuários filtrados para exibir */}
        {filteredUsers.length > 0 ? (
          // Mapeia cada usuário filtrado para um elemento JSX
          filteredUsers.map(user => (
            <div key={user.id}> {/* key única é obrigatória para otimização do React */}
              <h3>{user.name}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Telefone:</strong> {user.phone}</p>
              <p><strong>Empresa:</strong> {user.company.name}</p>
              <p><strong>Cidade:</strong> {user.address.city}</p>
            </div>
          ))
        ) : (
          // Mensagem exibida quando nenhum usuário é encontrado
          <p>Nenhum usuário encontrado para "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
}