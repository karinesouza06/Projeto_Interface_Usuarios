import Frase from './Frases'
// importando um componente dentro de outro 
function HelloWorld(){

    return (
        <>
        <div>
            <p>Meu primeiro componente!</p>
            <Frase/>
            
        </div>
        
        </>
    )

} 

export default HelloWorld