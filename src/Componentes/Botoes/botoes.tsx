import React from "react";
import style from './Botoes.module.scss';

class Botao extends React.Component<{texto: string}> {
    render() {
        return(
            <button className={style.botaoAdicionar}>
                {this.props.texto}
            </button>
        )
    }
}

export default Botao;