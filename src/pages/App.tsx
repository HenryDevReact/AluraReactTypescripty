import React, {useState} from 'react';
import Botao from '../Componentes/Botoes/botoes';
import Formulario from '../Componentes/Forms/Formulario';
import Lista from '../Componentes/Lista/Lista';
import Cronometro from '../Cronometro/Cronometro';
import { InterTarefa } from '../types/ITarefas';
import style  from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<InterTarefa[] | []>([]);
  const [selecionada, setSelecionada] = useState<InterTarefa>({
    tarefa: '',
    tempo: '',
    id: '', 
    completado: false,
    selecionado: false,
    editar: false});

  const Selecionar = (tarefaSelecionada : InterTarefa) => {
      if (tarefaSelecionada.selecionado) {
        setSelecionada({
          tarefa: '',
          tempo: '',
          id: '', 
          completado: false,
          selecionado: false,
          editar: false})
        setTarefas(oldTarefas => oldTarefas.map(tarefa => ({
          ...tarefa,
          selecionado : tarefaSelecionada.id === tarefa.id? false : false
        })))
      }else{
        setSelecionada(tarefaSelecionada)
        setTarefas(oldTarefas => oldTarefas.map(tarefa => ({
          ...tarefa,
          selecionado : tarefaSelecionada.id === tarefa.id? true : false
        })))
      }
  }

  return (
    <div className={style.ContainerPrincipal}>
      <div className={style.Titulo}>
        <h1>Estudy</h1>
      </div>
      <div className={style.MainCard}>
        <div className={style.Forms}>
          <Formulario setTarefas={setTarefas}/>
          <Cronometro selecionada={selecionada} />
        </div>
        <Lista tarefas={tarefas}
          QuantTarefas={tarefas.length}
          selectTarefa={Selecionar}
          />
      </div>
    </div>
  );
}

export default App;
