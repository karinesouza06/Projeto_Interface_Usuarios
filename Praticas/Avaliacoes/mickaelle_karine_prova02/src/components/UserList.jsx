import { useState, useEffect } from 'react';

export default function UserList() {

    const [users, setUsers] = useState([]); 
    const [filteredUsers, setFilteredUsers] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    
    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
             Error('Falha ao carregar os dados');
            }
            
            const data = await response.json();
            
            setUsers(data); 
            setFilteredUsers(data); 
            setLoading(false); 
        } catch (err) {
            setError(err.message);
            setLoading(false); 
        }
        };

        fetchUsers();
    }, []); 

   
    useEffect(() => {
        // Se o campo de busca estiver vazio, mostra todos os usuários
        if (searchTerm === '') {
        setFilteredUsers(users);
        } else {
        const filtered = users.filter(
            user => user.id.includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) 
          
        );
        setFilteredUsers(filtered); 
        }
    }, [searchTerm, users]); 


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); 
    };


    if (loading) {
        return <p>Carregando usuários...</p>;
    }


    if (error) {
        return <p>Erro: {error}</p>;
    }


    return (
        <div>
            <h2>Lista de Usuários</h2>
            
            <div>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Buscar por ID"
                /> 
                
            </div>

        
            <div>
                {/* Verifica se há usuários filtrados para exibir */}
                {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                    <div key={user.id}> 
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