import style from './Cronometro.module.scss'
import Botao from '../Componentes/Botoes/botoes'
import Relogio from './Relogio/Relogio'


export default function Cronometro() {
    return(
        <div className={style.areaCronometro}>
            <div className={style.cronometro}>
                <p className={style.cronometro__titulo}>Escolha uma materia e inicie o cronômetro </p>
                <Relogio/>
            </div>
            <Botao 
            texto='Começar'
            />
        </div>
    )
}