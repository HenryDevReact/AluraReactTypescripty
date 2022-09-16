import React from "react";
import Botao from "../Botoes/Index";
import Lista from "../Lista";

class Formulario extends React.Component {
    render() {
        return(
          <form>
            <div>
                <label htmlFor="tarefa">
                    Adicione um novo estudo 
                </label>
                <input 
                type={"text"}
                name={"Tarefa"}
                id={"tarefa"}
                placeholder={"O que você quer estudar"}
                required
                />
            </div>
            <div>
                <label htmlFor="time">
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
                />
            </div>
            <Botao/>
            
          </form>  
        )
    }
}

export default Formulario;