import React from "react";
import Botao from "../Botoes/botoes";
import Lista from "../Lista/Lista";
import style from './Formulario.module.scss'
class Formulario extends React.Component {
    render() {
        return(
          <form className={style.cadastro}>
            <div className={style.cadastro_inputs}>
                <div className={style.cadastro__tarefa}>
                    <label htmlFor="tarefa" className={style.tarefa__info}>
                        Adicione um novo estudo 
                    </label>
                    <input 
                    type={"text"}
                    name={"Tarefa"}
                    id={"tarefa"}
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
                    required
                    className={style.tempo__input}
                    />
                </div>
            </div>
            
            <Botao/>
            
          </form>  
        )
    }
}

export default Formulario;