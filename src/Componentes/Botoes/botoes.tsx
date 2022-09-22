import React from "react";
import style from './Botoes.module.scss';

class Botao extends React.Component<{texto: string,  onClick?: () => void}> {
    render() {
        return(
            <button className={style.botaoAdicionar} onClick={this.props.onClick}>
                {this.props.texto}
                
            </button>
        )
    }
}

export default Botao;