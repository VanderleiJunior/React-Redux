import React from "react";
import Card from "./Card";


function Propriedades(props) {
    return (
        <Card title={props.titulo} green>
            <div>
                {`${props.aluno} usa nota é ${props.nota}`}
            </div>
        </Card>
    );
}


export default Propriedades;
