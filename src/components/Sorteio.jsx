import React from "react";
import Card from "./Card";


function Sorteio(props) {

    const n = props.numero;
    const aleatorio = Math.round(Math.random() * n);

    return (
        <Card title= {`Sorteio de Números de 0 à ${n}`} yellow>
            <div>
                Resultado: {aleatorio}
            </div>
        </Card>
    );
}


export default Sorteio;

