import style from './Cronometro.module.scss'
import Botao from '../Componentes/Botoes/botoes'
import Relogio from './Relogio/Relogio'
import { InterTarefa, InterTime } from '../types/ITarefas'
import React, {useEffect, useState} from 'react';

interface Props{
    selecionada: InterTarefa,
}

function Converttime(time: string){
    const [hora = '0',minuto = '0',segundo = '0'] = time.split(':')
    return { 
        hora: Number(hora),
        minuto: Number(minuto),
        segundo: Number(segundo),
    }
}



export default function Cronometro({selecionada}:Props) {
    const [time, setTime] = useState<InterTime>(Converttime(selecionada.tempo))
    const [contando, setContando] = useState({ativo:false})

    useEffect(() => {
        setTime(Converttime(selecionada.tempo))
    } ,[selecionada])

    const Regressiva = (horaCont: number, minutoCont: number, segundoCont: number, ativo: boolean ) =>{
        setTimeout(()=>{
            if ((segundoCont > 0 || minutoCont > 0 || horaCont > 0) && ativo) {
                setTime({
                    hora: 
                        horaCont? 
                            minutoCont? 
                                horaCont 
                                : 
                                    segundoCont? 
                                        horaCont
                                    : 
                                        horaCont - 1 
                        : 
                        horaCont,
                    minuto: 
                        minutoCont?
                            segundoCont?
                                minutoCont
                            :
                                minutoCont - 1
                        :
                            horaCont?
                                minutoCont + 59
                            :
                                minutoCont,
                    segundo: 
                        segundoCont?
                            segundoCont - 1
                        :
                            horaCont?
                                segundoCont + 59
                            :
                                minutoCont?
                                    segundoCont + 59
                                :
                                    segundoCont
                })
                return Regressiva(
                    horaCont? 
                        minutoCont? 
                            horaCont 
                            : 
                            segundoCont? 
                            horaCont
                            : 
                            horaCont - 1 
                    : 
                    horaCont,
                    minutoCont?
                        segundoCont?
                            minutoCont
                        :
                            minutoCont - 1
                    :
                        horaCont?
                            minutoCont + 59
                        :
                            minutoCont,
                    segundoCont?
                        segundoCont - 1
                    :
                        horaCont?
                            segundoCont + 59
                        :
                            minutoCont?
                                segundoCont + 59
                            :
                                segundoCont,
                    contando.ativo
                    )
            }
        }, 1000)
    }
    return(
        <div className={style.areaCronometro}>
            <div className={style.cronometro}>
                <p className={style.cronometro__titulo}>{selecionada.tarefa? <>{selecionada.tarefa}</>: <>Escolha um card e inicie o cronômetro</>} </p>
                <Relogio contando={contando.ativo} tempo={time}/>
            </div>
            <Botao 
            texto={contando.ativo? 'Começar' : 'Parar'}
            onClick={() => {
                Regressiva(time.hora, time.minuto, time.segundo, contando.ativo );
                if (contando.ativo){
                    setContando({ativo:false})
                }else{
                    setContando({ativo:true})
                }
                console.log(contando.ativo)
            }}
            />
        </div>
    )
}