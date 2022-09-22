import { InterTarefa } from '../../../types/ITarefas'
import style from '../Lista.module.scss'

interface Props extends InterTarefa{
    selectTarefa: (tarefaSelecionada: InterTarefa) => void
}


export default function Item({ tarefa, tempo, id, selecionado, completado, editar, selectTarefa}: Props) {

    return(
        <li key={id}  className={`${style.lista__item} ${selecionado ? style.lista__item__Select : ""} ${completado ? style.lista__item__complet : ""}`} onClick={event => {selectTarefa({tarefa, tempo, id, selecionado, completado, editar})}}>
            <div className={style.lista__item__info}>
                <h3 className={style.lista__tarefa}>
                    {tarefa}
                </h3>
                <span className={style.lista__tempo}>
                {tempo}
                </span>
            </div>
            {completado && <span className={style.lista__icon}></span>}

        </li>
    )
}