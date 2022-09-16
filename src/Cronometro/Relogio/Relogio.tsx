import style from '../Cronometro.module.scss'
export default function Relogio() {
    return(
        <div className={style.cronometro__relogio}>
            <span>0</span>
            <span>0</span>
            <span>:</span>
            <span>0</span>
            <span>0</span>
            <span>:</span>
            <span>0</span>
            <span>0</span>
        </div>
    )
}