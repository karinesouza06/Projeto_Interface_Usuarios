import './EscopoReduz.css'

const EscopoReduz = () => {

    function handleClick(){
    
            let corpo  =  document.getElementById("body")
            corpo.style.backgroundColor = "blue"         
    
    }

    return (
        <>
        <body id='body'>
            <div>
                <button onClick={handleClick}>Mais um</button>
            </div>
            
        </body>
            
        </>
    )
}

export default EscopoReduz