// 03 - Crie um componente que implemente uma tela login. As

// informações inseridas pelo usuário (login e senha) devem ser
// enviadas e mostradas ao console.log.
// (Aqui sugere-se seguir a padrão de formulários trabalhados em
// sala, inserindo os eventos onChange e onSubmmit além do
// objetos de eventos e com o método preventDefault.)

import { useState } from 'react';

export default function LoginForm() {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Manipulador de mudança para o campo de email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Manipulador de mudança para o campo de senha
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Manipulador de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    

    console.log('Credenciais enviadas:');
    console.log('Email:', email);
    console.log('Senha:', password);
    
    setEmail('');
    setPassword('');
  };

  return (
    <div>
        <h2>Login</h2>
      
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Digite seu email"
                    required
                    />
                </div>
                
                <div>
                <label>Senha:</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Digite sua senha"
                    required
                />
            </div>
            
            <button type="submit"> Entrar</button>
        </form>
    </div>
  );
}