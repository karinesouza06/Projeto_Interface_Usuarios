function Evento(){

    function meuEvento(){
        window.alert("botão ativado")
       
    }

    function meuEventoCor(){
        document.body.style.backgroundColor = 'blue'
    }

    return(
        <>
        <div>
            <p>Clique no botão abaixo para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar evento</button>
        </div>

        <div>
            <p>Clique no botão abaixo para disparar um evento:</p>
            <button onClick={meuEventoCor}>Ativar evento</button>
        </div>


        </>
    )
}

export default Evento