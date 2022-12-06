import React from "react";
import "./Numero.css";
import Card from "./Card";


function Numero(props) {

    const { numero } = props;

    return (
        <Card title="Escolha um Número" blue>
            <div className="Numero">
                <span>
                    <label>Número:</label>
                    <input
                        type="number"
                        value={numero}
                        onChange={e => {
                            // O +e converte o parametro em número
                            props.onNumChanged(+e.target.value)
                        }}
                    />
                </span>
            </div>
        </Card> 
    );
}


export default Numero;
