import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss'

class Formulario extends React.Component{
    render(): React.ReactNode {
        return(
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo:</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar?"  required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo de estudo:</label>
                    <input type="time" name="tempo" id="tempo" step={1} min="00:00:00" max="01:30:00" required/>
                </div>
                <Botao
                    texto="Adicionar"
                />
            </form>
        )
    }
}

export default Formulario;