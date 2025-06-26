import { useState } from 'react'
import './ListTarefas.css'

function ListTarefas() {

    const[tarefa, setTarefa] = useState('')
    const[listas, setListas] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setListas([...listas, tarefa])
        setTarefa('')

    }

    const handleClear = () => {
        setListas([])

    }


    return (
        <>
            <h2>Lista Tarefas</h2>

            <form onSubmit={handleSubmit}>

                <label>
                    <input type="text" onChange={(e) => setTarefa(e.target.value)} value={tarefa}/>
                </label>

                <input type="submit"/>
            </form>

            <ul>
                {listas.map((item)=> 
                <li>{item}</li>)}
            </ul>

            <button onClick={handleClear}>Resetar</button>
 
        </>
    )
}

export default ListTarefas
