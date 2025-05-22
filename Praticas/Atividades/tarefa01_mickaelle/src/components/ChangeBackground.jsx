
function ChangeBackground (){
    
    function handleColor() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    return(
        <div>
            <button onClick={handleColor} >Alternar Tema</button>
        </div>

    )
}

export default ChangeBackground