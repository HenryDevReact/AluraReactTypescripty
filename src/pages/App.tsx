import React from 'react';
import Botao from '../Componentes/Botoes/Index';
import Formulario from '../Componentes/Forms';
import Lista from '../Componentes/Lista';
import style  from './App.module.scss';
function App() {
  return (
    <div className={style.ContainerPrincipal}>
      <div className={style.Titulo}>
        <h1>Estudy</h1>
      </div>
      <div className={style.AppStyle}>
        <Formulario/>
        <Lista/>
      </div>
    </div>
  );
}

export default App;
