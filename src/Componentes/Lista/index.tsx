import React from "react";

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
            <aside>
                <h2>Estudos do dia </h2>
                <ul>
                    {tarefas.map((item, index) => (
                        <li key={item.id}>
                            <h3>
                                {item.tarefa}
                            </h3>
                            <span>
                               {item.tempo}
                            </span>
                        </li>
                    ))}
                    
                </ul>
            </aside>
        )
}


export default Lista; 