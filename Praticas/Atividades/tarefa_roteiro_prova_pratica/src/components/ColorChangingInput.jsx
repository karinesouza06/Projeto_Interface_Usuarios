// 02 - Implemente um input que a medida que o usuário insere
// dados (um texto por exemplo) o background da tela mude de
// cor.
// (Dica: esse componente é muito parecido com o contador de
// clicks CounterClicks.jsx mostrado em sala. A alteração será
// trocar o botão por um input e substituir o evento onClick por
// um onChange)

import { useState, useEffect } from 'react';

export default function ColorChangingInput(){

    const [inputValue, setInputValue] = useState('');
    const colors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];

    // Atualiza a cor de fundo sempre que o inputValue muda
    useEffect(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    }, [inputValue]); // Executa quando inputValue muda

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
     
    return (
        <>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Digite algo..."/>
            </div>
        </>
    )
}