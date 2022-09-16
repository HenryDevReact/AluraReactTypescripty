import React, {useState} from 'react';
import Botao from '../Componentes/Botoes/botoes';
import Formulario from '../Componentes/Forms/Formulario';
import Lista from '../Componentes/Lista/Lista';
import Cronometro from '../Cronometro/Cronometro';
import { InterTarefa } from '../types/ITarefas';
import style  from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<InterTarefa[] | []>([]);
  const [editTarefas, setEditTarefas] = useState<InterTarefa>();
  return (
    <div className={style.ContainerPrincipal}>
      <div className={style.Titulo}>
        <h1>Estudy</h1>
      </div>
      <div className={style.MainCard}>
        <div className={style.Forms}>
          <Formulario setTarefas={setTarefas}  />
          <Cronometro/>
        </div>
        <Lista tarefas={tarefas}
          QuantTarefas={tarefas.length}
          
          />
      </div>
    </div>
  );
}

export default App;
