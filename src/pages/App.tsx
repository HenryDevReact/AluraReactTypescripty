import React from 'react';
import Botao from '../Componentes/Botoes/botoes';
import Formulario from '../Componentes/Forms/Formulario';
import Lista from '../Componentes/Lista/Lista';
import style  from './App.module.scss';
function App() {
  return (
    <div className={style.ContainerPrincipal}>
      <div className={style.Titulo}>
        <h1>Estudy</h1>
      </div>
      <div className={style.MainCard}>
        <div className={style.Forms}>
          <Formulario/>
          <div className={style.Cronometro}></div>
        </div>
        <Lista/>
      </div>
    </div>
  );
}

export default App;
