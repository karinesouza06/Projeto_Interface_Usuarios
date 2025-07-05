import './List.css'
import { useState } from 'react'
import ChangeBackground from './ChangeBackground'

export default function List() {
    const [tarefa, setTarefa] = useState('')
    const [prioridade, setPrioridade] = useState('')
    const [lista, setLista] = useState([])
    const [limiteAtingido, setLimiteAtingido] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();

        if (!tarefa.trim()) {
            return;
        }

        const novaTarefa = {
            id: Math.floor(Math.random() * 10000),
            texto: tarefa,
            prioridade: prioridade || 'não definida', 
            status: false
        }

        if (lista.length < 20) {
            setLista([...lista, novaTarefa]);
            setLimiteAtingido(false);
        } else {
            setLimiteAtingido(true);
        }

        setTarefa('');
        setPrioridade('');
    }


    function handleClear() {
        setLista([]);
        setLimiteAtingido(false);
    }

    function handleToggle(id){
        setLista(lista.map(item => 
            item.id === id ? { ...item, status: !item.status } : item
        ))
    }

    function handleClearUnique(id) {
        setLista(lista.filter(item => item.id !== id));
    }


    return (
        <>
            <h1>FocoList</h1>

            <ChangeBackground />

            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <span className='titulos'>Nome da tarefa:</span>
                        <input 
                            type="text" 
                            onChange={(e) => setTarefa(e.target.value)} 
                            value={tarefa} 
                            placeholder="Digite sua tarefa"
                        />
                    </label>
                </div>

                <div>
                    <label>
                        <span className='titulos'>Prioridade da tarefa:</span>
                        <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
                            <option value="">Selecione uma prioridade</option>
                            <option value="alta">Alta</option>
                            <option value="intermediaria">Intermediária</option>
                            <option value="baixa">Baixa</option>
                        </select>
                    </label>
                </div>

                <input type="submit" value="Adicionar Tarefas" />
                <input type="submit" value="Limpar tarefas" onClick={handleClear}/>
                

                {() => {
                    if (limiteAtingido) {
                        return (
                            <div className="limite-mensagem">
                                Limite de 20 tarefas atingido! Limpe a lista para adicionar mais.
                            </div>
                        )
                    }
                    return null; 
                }}
            </form>

            <div className="task-list">
                <h2>Lista de Tarefas</h2>
                
                {(() => {
                    if (lista.length === 0) {
                        return <p className="lista-vazia">Nenhuma tarefa adicionada ainda</p>;
                    } else {
                        return (
                            <ul>
                                {lista.map((item) => (
                                    <li key={item.id} className={`task-item priority-${item.prioridade}`}>
                                        <span >Nome da tarefa: {item.texto} </span> <br/>
                                        <span >Prioridade: {item.prioridade}</span><br/>
                                        <button onClick={() => handleToggle(item.id)}>{item.status ? 'Desmarcar' : 'Concluir'}</button>
                                        <button onClick={() => handleClearUnique(item.id)}>Excluir tarefa</button>
                                    </li>
                                ))}
                            </ul>
                        );
                    }
                })()}
            </div>
        </>
    )
}