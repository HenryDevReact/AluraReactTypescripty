import React from "react";
import style from './Lista.module.scss'
const Lista = () => {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00',
        id: 1
    },{
        tarefa: 'Java',
        tempo: '01:00:00',
        id: 2
    }]
    
        return(
            <aside className={style.areaLista}>
                <h2 className={style.lista__titulo}>Estudos do dia </h2>
                <ul className={style.lista}>
                    {tarefas.map((item, index) => (
                        <li key={item.id} className={style.lista__item}>
                            <h3 className={style.lista__tarefa}>
                                {item.tarefa}
                            </h3>
                            <span className={style.lista__tempo}>
                               {item.tempo}
                            </span>
                        </li>
                    ))}
                    
                </ul>
            </aside>
        )
}


export default Lista; 