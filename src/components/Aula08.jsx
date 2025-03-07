import React, { useState } from "react";
import Aula08_NumeroSorteado from "./Aula08_NumeroSorteado";
import Aula08_ListaNomes from "./Aula08_ListaNomes";

const Aula08 = () => {
   // const numerosSorteados = [10, 43, 28, 2];
   const [numerosSorteados, setNumerosSorteados] = useState([10]);

    // function botaoSortear () {
    const botaoSortear = () => {
        const novoNumero = Math.floor(Math.random() * 75) + 1;
        numerosSorteados.push(novoNumero)
        setNumerosSorteados([...numerosSorteados])
        console.log(numerosSorteados)

    } 

    const botaoExcluir = (nr) => {
        setNumerosSorteados(numerosSorteados.filter((numero) => numero!= nr));
    }

    

    return (
        <div className="card">
            <h3> Aula 08 - Lista em React </h3>
            <p> Exibindo conteúdos dinamicamente com as listas </p>
            <hr />
            <button className="btn btn-primary" onClick={botaoSortear}> Sortear </button>
            <p> Lista de números sorteados: </p>
            <div className="d-flex gap-3">              
                {/* O map é como um for para arrays/vetores */}
                {
                    numerosSorteados.map((numero, index) => (
                        // O index serve para identificar a posição do item no vetor 
                        // A prop key é obrigatória e deve ser única para cada item
                        <Aula08_NumeroSorteado numero={numero} index={index} botaoExcluir={botaoExcluir}/>
                    ))
                }
            </div>
            <Aula08_ListaNomes />
        </div>
    )
}

export default Aula08;