//Trabalhando com props


function SayMyName(props){
    return (
        <>
        <div>
            
            <p>Idade: {props.idade}</p>
            <p>Tipo: {props.tipo}</p>
        </div>
        </>
    )
}

export default SayMyName 