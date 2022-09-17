import { InterTime } from '../../types/ITarefas'
import style from '../Cronometro.module.scss'

interface Props {
    tempo: InterTime,
    contando: boolean
}

export default function Relogio({tempo, contando} : Props) {
    return(
        <div className={`${style.cronometro__relogio} ${tempo.hora > 0 || tempo.minuto > 0 || tempo.segundo > 0? contando? style.cronometro__relogio__ativo : style.cronometro__relogio__Inativo : ''}`}>
            {tempo.hora > 9 ? <></> : <span>0</span>}
            <span>{tempo.hora}</span>
            <span>:</span>
            {tempo.minuto > 9 ? <></> : <span>0</span>}
            <span>{tempo.minuto}</span>
            <span>:</span>
            {tempo.segundo > 9 ? <></> : <span>0</span>}
            <span>{tempo.segundo}</span>
        </div>
    )
}