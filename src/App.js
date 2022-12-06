import React, { useState } from "react";
import "./App.css";

import Desafio from "./components/Desafio";
import Numero from "./components/Numero";
import Propriedades from "./components/Propriedades";
import Sorteio from "./components/Sorteio";
import Recesso from "./components/Recesso";


function App() {

  const [numero, setNumero] = useState(0);

  return (
    <div className="App">
      <h1>Projeto Avaliativo React-Redux 2° Bimestre</h1>
      
      <div>
        <Desafio />
        <Numero
          numero={numero}
          onNumChanged={setNumero}
        />
        <Propriedades
          aluno="Vanderlei"
          titulo="Qual a sua nota?"
          nota={numero}
        />
        <Sorteio
          numero={numero}
        />
        <Recesso
          numero={numero}
          />
      </div>
    </div>
  );
}

export default App;
