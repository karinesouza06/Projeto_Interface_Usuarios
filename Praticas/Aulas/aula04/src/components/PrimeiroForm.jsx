import './FirsForm.css'
import { useState } from 'react'

export default function PrimeiroForm(){

    const[nome,setNome] = useState('')
    const[telefone,setTelefone] = useState('')
    const[email,setEmail] = useState('')
    const[senha,setSenha] = useState('')

    return(
        <> 
            <form>
                <div>
                    <label>
                        <span>Nome:</span> 
                        <input type="text" name="nome" onChange={(e) => setNome(e.target.value)} value={nome} placeholder='Digite seu nome' />
                    </label>
                </div>

                <div>
                    <label>
                        <span>Email:</span> 
                        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Digite seu email' />
                    </label>
                </div>

                <div>
                    <label>
                        <span>Telefone:</span> 
                        <input type="text" name="telefone" onChange={(e) => setTelefone(e.target.value)} value={telefone} placeholder='Digite seu telefone' />
                    </label>
                </div>

                <div>
                    <label>
                        <span>Senha:</span> 
                        <input type="text" name="senha" onChange={(e) => setSenha(e.target.value)} value={senha} placeholder='Digite sua senha' />
                    </label>
                </div>

                <div>
                    <input type="submit" value="Enviar"/>
                </div>
            </form>

            <div>
                <h4>O seu nome é: {nome}</h4>
                <h4>O seu email é: {email}</h4>
                <h4>O seu telefone é: {telefone}</h4>
                <h4>A sua senha é: {senha}</h4>
            </div>
              
        </>
    )

}