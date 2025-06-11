import './SayMyName'
import SayMyName from './SayMyName'

function PessoaProps(props){
  const name = "Imagem"
  const url = "https://pm1.aminoapps.com/6501/002c6e0884db5ff8314c7cb7055a1491cd56231d_hq.jpg"


    return(
        <>
        <figure>
            <img src={url} alt={name} />
            <figcaption>{props.nome}</figcaption>
        </figure>
        <SayMyName idade='18' tipo='Vampira e Duplicata'/>
        </>
    )
}

export default PessoaProps