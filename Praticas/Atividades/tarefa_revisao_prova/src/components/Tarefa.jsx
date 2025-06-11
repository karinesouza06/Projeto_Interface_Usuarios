import { useState } from 'react';

function Tarefa({ titulo }) {
  const [concluida, setConcluida] = useState(false);

  const alternarConclusao = () => {
    setConcluida(!concluida);
  }

  return (
    <>
      <h3>
        {titulo}
      </h3>

      <button onClick={alternarConclusao}>
        {concluida ? 'Desmarcar' : 'Concluir'}
      </button>
    </>
        
  )
}
export default Tarefa