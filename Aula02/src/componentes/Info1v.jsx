import {useState} from 'react'

export default function Info1v(){

    let valor = 0

    let [valor2, setValor2] = useState(0)

    function numeric(){
        let variavel = valor2*2
        setValor2(variavel)
    }

    return (
        <>
            <div>
                <button onClick={() => setValor2(valor2+1)}> Cliques {valor2}</button>
            </div>

            <div>
                <button onClick={numeric}> Cliques {valor2}</button>
            </div>
        </>
    )

} 