import { useState } from "react";
import Aula05_Contador from "./Aula05_Contador";
import Aula05_Calculadora from "./Aula05_Calculadora";
import Aula05_Placar from "./Aula05_Placar";


const Aula05 = () => {
    // [variável, função para atualizar a variável] = valor_inicial
    const [nome, setNome] = useState(''); // Inicializa o estado com uma string vazia
    const[visivel, setVisivel] = useState(false);

    return (
        <div className="card">
            <h1> Aula 05 - Estado de um Componente </h1>
            <p> O hook useState adiciona estado a componentes funcionais, permitindo atualizar valores dinamicamente e re-renderizar o componente </p>
            <hr />
            <p> Exemplos de Uso: </p> 
            <input onChange={(e) => setNome(e.target.value)} value={nome} />
            <p> Olá, {nome} ! </p>
            <button onClick={() => setNome('')}> Limpar </button>
            <hr />
            <button onClick={() => setVisivel(!visivel)}> {visivel == true ? 'Ocultar' : 'Mostrar'} </button>
            {/* "if visivel == true" então exibe o parágrafo */}
            { visivel == true && <p> ⭐ Este é um texto secreto ⭐ </p> } 
            <hr />
            <Aula05_Contador/>
            <hr />
          <Aula05_Placar/>
            <hr /> 
            
            <Aula05_Calculadora/>
        </div>
    )
}

export default Aula05;