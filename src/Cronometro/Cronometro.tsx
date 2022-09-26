import style from './Cronometro.module.scss'
import Botao from '../Componentes/Botoes/botoes'
import Relogio from './Relogio/Relogio'
import { InterTarefa, InterTime } from '../types/ITarefas'
import React, {useEffect, useState} from 'react';

var interval: NodeJS.Timer

interface Props{
    selecionada: InterTarefa,
    completTarefa: () => void
}

function Converttime(time: string){
    const [hora = '0',minuto = '0',segundo = '0'] = time.split(':')
    return { 
        hora: Number(hora),
        minuto: Number(minuto),
        segundo: Number(segundo),
    }
}

export default function Cronometro({selecionada, completTarefa}:Props) {
    const [time, setTime] = useState<InterTime>(Converttime(selecionada.tempo))
    const [contando, setContando] = useState({ativo:false})
    useEffect(() => {
        setTime(Converttime(selecionada.tempo))
        clearInterval(interval)
        setContando({ativo:false})
    } ,[selecionada])

    if(time.hora === 0 && time.minuto === 0 && time.segundo == 0 ){
        if(contando.ativo){
            completTarefa()
            clearInterval(interval)
            setContando({ativo:false})
        }
        
    }
    function Stoptime(){
        clearInterval(interval)
    }
    function Starttime(){
        interval = setInterval(()=>{
                        setTime(Oldvalue => { 
                            return{
                            hora: 
                                Oldvalue.hora? 
                                    Oldvalue.minuto? 
                                        Oldvalue.hora 
                                        : 
                                            Oldvalue.segundo? 
                                                Oldvalue.hora
                                            : 
                                                Oldvalue.hora - 1 
                                : 
                                Oldvalue.hora,
                            minuto: 
                                Oldvalue.minuto?
                                    Oldvalue.segundo?
                                        Oldvalue.minuto
                                    :
                                        Oldvalue.minuto - 1
                                :
                                    Oldvalue.hora?
                                        Oldvalue.minuto + 59
                                    :
                                        Oldvalue.minuto,
                            segundo: 
                                Oldvalue.segundo?
                                    Oldvalue.segundo - 1
                                :
                                    Oldvalue.hora?
                                        Oldvalue.segundo + 59
                                    :
                                        Oldvalue.minuto?
                                            Oldvalue.segundo + 59
                                        :
                                            Oldvalue.segundo
                        }})
                    },1000)
    }
    return(
        <div className={style.areaCronometro}>
            <div className={style.cronometro}>
                <p className={style.cronometro__titulo}>{selecionada.tarefa? <>{selecionada.tarefa}</>: <>Escolha um card e inicie o cronômetro</>} </p>
                <Relogio contando={contando.ativo} tempo={time}/>
            </div>
            
            <Botao 
            texto={contando.ativo? 'Pausar' : 'Começar'}
            onClick={() => {
                    if(contando.ativo){
                        setContando({ativo: false})
                        Stoptime()
                    }else{
                        setContando({ativo: true})
                        Starttime()
                    }  
                }}
            />
            
            
        </div>
    )
}