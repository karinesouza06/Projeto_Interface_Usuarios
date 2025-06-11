import {carros} from './dados_carro.js'

export default function ListasMap(){
    return(
        <div>
            <ul>
                {/* map irá iterar por todos os elementos do array nomes e retornará um novo array
                com as alterações realizadas. No caso do exemplo cada elemento de nomes será estruturado
                em um li e armazenado no array nome.  */}
                {carros.map(carros => (
                    <li >{carros}</li>
                ))}
            </ul>
        </div>
    )
}