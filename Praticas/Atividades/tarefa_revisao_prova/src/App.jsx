import './App.css'
import  HelloWorld from './components/HelloWorld.jsx'
import SayMyName from './components/SayMyName.jsx'
import PessoaProps from './components/PessoaProps.jsx'
import Evento from './components/Evento.jsx'
import Contador from './components/ContadorSimples.jsx'

function App() {

  // aqui cria a lógica do código
  const name = "Mickaelle"
  const url = "https://pm1.aminoapps.com/6501/002c6e0884db5ff8314c7cb7055a1491cd56231d_hq.jpg"

  function sum(a,b){
    return a + b 
  }

  return (
    <>

    {/* 
    testes aleatórios sem usar componentes
    <div>
      <div className='nome'>
        <h1>Olá, {name}</h1>
      </div>

      <div>
        <p>A soma entre 78 e 90 é: {sum(78, 90)}.</p>
      </div>

      <div>
        <img src={url} alt="Imagem"/>
      </div>
    </div>

    Teste utilizando componentes 
    <HelloWorld/>

    Teste utilizando componente com o atributo Props
    <SayMyName nome='Karine' numero='18'/> 
    <SayMyName nome={name} numero={19}/>  */}

    <PessoaProps nome="Elena Gilbert"/>

    <Evento/>

    <Contador/>


    
      
    </>
  )
}

export default App
