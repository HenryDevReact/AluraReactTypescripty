import React from "react";
import Botao from "../Botoes/botoes";
import Lista from "../Lista/Lista";
import style from './Formulario.module.scss'
import { InterTarefa } from "../../types/ITarefas";
import { v4 as Uuidv4} from 'uuid';

class Formulario extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<InterTarefa[]>>}> {
    state = {
        tarefa: '',
        tempo: '00:00:00',
        id: 0
    }

    AddTarefa(event: React.FormEvent){
        event.preventDefault();
        this.setState({
            id: Uuidv4()
        })
        this.props.setTarefas(OldTarefas => [...OldTarefas, {...this.state, completado: false, selecionado:false, editar: false}])
        this.setState({
            tarefa: '',
            tempo: '00:00:00',
        })
    }
    render() {
        return(
          <form className={style.cadastro} onSubmit={this.AddTarefa.bind(this)}>
            <div className={style.cadastro_inputs}>
                <div className={style.cadastro__tarefa}>
                    <label htmlFor="tarefa" className={style.tarefa__info}>
                        Adicione um novo estudo 
                    </label>
                    <input 
                    type={"text"}
                    name={"Tarefa"}
                    id={"tarefa"}
                    value={this.state.tarefa}
                    onChange={(event) => {this.setState({...this.state, tarefa: event.target.value})}}
                    placeholder={"O que você quer estudar"}
                    required
                    className={style.tarefa__input}
                    />
                </div>
                <div className={style.cadastro__tempo}>
                    <label htmlFor="time" className={style.tempo__info}>
                        Tempo
                    </label>
                    <input
                    type={"time"}
                    step={"1"}
                    name={"Tempo"}
                    id={"time"}
                    min={"00:00:00"}
                    max={"23:59:59"}
                    placeholder={""}
                    value={this.state.tempo}
                    onChange={(event) => {this.setState({...this.state, tempo: event.target.value})}}
                    required
                    className={style.tempo__input}
                    />
                </div>
            </div>
            
            <Botao texto="Adicionar"/>

            
          </form>  
        )
    }
}

export default Formulario;