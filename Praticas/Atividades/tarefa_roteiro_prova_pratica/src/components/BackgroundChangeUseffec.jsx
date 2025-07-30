// 01 - Criem um componente que implemente a alteração de tema
// (dark / ligth mode) utilizando o useEffect.

import { useState, useEffect } from 'react';

export default function ChangeBackground (){

     const [darkMode, setDarkMode] = useState(false);

  // Aplica o tema quando o componente é montado e quando darkMode muda
    useEffect(() => {
        if (darkMode) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };


    return (
        <>
        <button onClick={toggleTheme}>
            {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
        
        </>
    )
}