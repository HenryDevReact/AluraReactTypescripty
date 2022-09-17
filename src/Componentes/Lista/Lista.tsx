import React, {useState} from "react";
import style from './Lista.module.scss'
import Item from './Item/Item'
import { InterTarefa } from "../../types/ITarefas";


interface Props{
    tarefas: InterTarefa[],
    QuantTarefas: number,
    selectTarefa: (tarefaSelecionada: InterTarefa) => void
}

const Lista = ({tarefas, QuantTarefas, selectTarefa} : Props) => {
    
    
        return(
            <>
                {QuantTarefas? 
                <aside className={style.areaLista} >
                    <h2 className={style.lista__titulo} >Estudos do dia </h2>
                    <ul className={style.lista}>
                        {tarefas.map((item, index) => (
                            <Item 
                            selectTarefa={selectTarefa}
                            key={index}
                            {...item}
                            
                            />
                        ))}
                        
                    </ul>
                </aside>
                :
                <aside className={style.areaLista__empyt} >
                    <p className={style.lista__empyt}>
                        Sem tarefas
                    </p>
                </aside>
                
                }
            </>
        )
}


export default Lista; 