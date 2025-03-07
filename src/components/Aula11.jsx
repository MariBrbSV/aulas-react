import { useState, useEffect } from "react";
import Aula11_CEP from "../components/Aula11_CEP"

const Aula11 = () => {
    const [dogImagem, setDogImagem] = useState(['']);
    
    async function buscarDados(){
        try {
            const resposta = await fetch('https://dog.ceo/api/breed/shihtzu/images/random');
            const dados = await resposta.json();
            console.log(dados);
            setDogImagem(dados.message);
        }
        catch (error){
            console.error('Erro ao buscar dados:', error);
        }
    }

    useEffect(() => {
        buscarDados()
    }, [])

    return (
        <div className="card">
            <h1> Aula 11 - Consumo de APIs </h1>
            <p> Aprendendo a utilizar APIs em React </p>
            <hr />

                <p> Imagem de Cachorro </p>
                <img src={dogImagem} alt="" className="img-cachorro"/>
                <button onClick={buscarDados} className="btn btn-primary botao-imgch"> Exibir nova imagem </button>

                <hr />

                <Aula11_CEP />

        </div>
    )
}

export default Aula11;