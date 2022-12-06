import React from "react";
import Card from "./Card";


function Recesso(props) {
    return (
        <Card title="Está chegando..." purple>
            <div>
                Estarei de recesso em {props.numero + 10} dias
            </div>
        </Card>
    );
}


export default Recesso;
