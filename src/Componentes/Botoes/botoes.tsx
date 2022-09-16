import React from "react";
import style from './Botoes.module.scss';

class Botao extends React.Component {
    render() {
        return(
            <button className={style.botaoAdicionar}>
                Adicionar
            </button>
        )
    }
}

export default Botao;