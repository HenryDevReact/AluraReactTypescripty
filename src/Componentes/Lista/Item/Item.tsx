import style from '../Lista.module.scss'

export default function Item({ tarefa, tempo, id}: {tarefa: string, tempo: string, id: number }) {
    return(
        <li key={id}  className={style.lista__item}>
            <h3 className={style.lista__tarefa}>
                {tarefa}
            </h3>
            <span className={style.lista__tempo}>
               {tempo}
            </span>
        </li>
    )
}