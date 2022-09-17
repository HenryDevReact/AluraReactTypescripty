import { InterTarefa } from '../../../types/ITarefas'
import style from '../Lista.module.scss'

interface Props extends InterTarefa{
    selectTarefa: (tarefaSelecionada: InterTarefa) => void
}


export default function Item({ tarefa, tempo, id, selecionado, completado, editar, selectTarefa}: Props) {

    return(
        <li key={id}  className={`${style.lista__item} ${selecionado ? style.lista__item__Select : ""}`} onClick={event => {selectTarefa({tarefa, tempo, id, selecionado, completado, editar})}}>
            <h3 className={style.lista__tarefa}>
                {tarefa}
            </h3>
            <span className={style.lista__tempo}>
               {tempo}
            </span>
        </li>
    )
}