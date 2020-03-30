import React, {useState} from 'react';
import Routes from './routes';
import './global.css';

//componente no react é uma função que retorna HTML.
//JSX é quando o HTML está integrado dentro do Java Script
//quando usa o useState ele retorna um Array[valor, funcaoDeAtualizacao]
//o useState não pode modificar a variável direto, por isso cria o setXxxx
function App() {  
  return (
    <Routes />
  );
}

export default App;