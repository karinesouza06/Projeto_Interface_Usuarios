// Crie um componente que implemente uma tela login. 
// O usuário deverá inserir duas informações: 
// login e palavra-passe. Caso a palavra-passe digitada seja a correta, 
// o background da tela deve mudar de cor.

import { useState } from 'react';

export default function LoginForm() {
    
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log('Credenciais enviadas:');
    console.log('Login:', login);
    console.log('Palavra-passe:', password);
    
    setLogin('');
    setPassword('');
  };

  const handleClick = () => {

    if (password === 'PIUprova'){
        const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;
    } else {
        console.log('palavra incorreta')
    }
     
    }

  return (
    <div>
        <h2>Formulário</h2>
      
        <form onSubmit={handleSubmit}>
            <div>
                <label>Login:</label>
                <input
                    type="text"
                    value={login}
                    onChange={handleLoginChange}
                    placeholder="Digite seu login"
                    required
                    />
                </div>
                
                <div>
                <label>Palavra-passe:</label>
                <input
                    type="text"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Digite a palavra-passe"
                    required
                />
            </div>
            
            <button onClick={handleClick} type="submit">Entrar</button>
        </form>
    </div>
  );
}