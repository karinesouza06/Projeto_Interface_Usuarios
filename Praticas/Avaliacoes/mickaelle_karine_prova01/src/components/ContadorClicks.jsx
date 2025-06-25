import { useState } from 'react';

    function Contador() {

    //variável contador que a princípio está zerada e conforme o botão selecionado será atualizada.
    const [contador, setContador] = useState(0);
    

    //função que irá alternar a cor dos botões 
    function CorButton(){
        //se contador for maior que 10, aternará a cor do botão para verde.
        if (contador > 10){
            document.getElementsByClassName('button_incremento')[0].style.backgroundColor = 'green';
            document.getElementsByClassName('button_decremento')[0].style.backgroundColor = "red" 
        } 

    }

    return (
        <>
            <div>
                {/*Paragráfo que irá exibir a váriavel contador. */}
                <p>Você clicou {contador} vezes</p>
            </div>

            <div>
                {/*Quando o botão for acionado irá disparar um evento de click. 
                Esse evento chama a função 'setContador' e acrescenta + 1 ao valor contido na variável contador. 
                A class será usada para a parte condicional.*/}
                <button className='button_incremento' onClick={() => setContador(contador + 1)}>
                    Adicione 1
                </button> 
            </div>

            <div>
                {/*Quando o botão for acionado irá disparar um evento de click. 
                Esse evento chama a função 'setContador' e acrescenta + 1 ao valor contido na variável contador. 
                A class será usada para a parte condicional.*/}
                <button className='button_decremento' onClick={() => setContador(contador - 1)} >
                    Remova 1
                </button>
            </div>
        </>
    
    );
}

export default Contador