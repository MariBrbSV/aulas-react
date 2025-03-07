import { useState, useEffect } from "react";
import Aula08_Nome from "./Aula08_Nome";

const Aula08_ListaNomes = () => {
    const [listaPresenca, setListaPresenca] = useState([]);
    const [nome, setNome] = useState('aaaaaa');

    const botaoAdicionar= () => {
        if (nome != '') {
            const novaLista = [...listaPresenca, nome]
        setListaPresenca(novaLista)
        setNome('')
        localStorage.setItem('DadosPresenca', JSON.stringify(novaLista));
        }
    }

    const botaoExcluir = (nome) => {
        const novaLista = listaPresenca.filter((pessoa) => pessoa != nome);
        setListaPresenca(novaLista);
        localStorage.setItem('DadosPresenca', JSON.stringify(novaLista))
    }

    const botaoLimpar = (nomePessoa) => {
        setListaPresenca([]);
    }

    useEffect(() => {
        const dados = localStorage.getItem('DadosPresenca') || '[]';
        setListaPresenca(JSON.parse(dados));
    }, [])

    return (
        <div className="card mt-5 gap-3">
            <h1> Lista de Presença do Churrasco </h1>
            <hr />
            <div className="gap-5 d-flex"> 
            <input className="input-churras" onChange={(e) => setNome(e.target.value)} value={nome} />
            <button className="btn btn-primary btn1" onClick={botaoAdicionar}> Adicionar </button>
            </div>

            {/* Lista de Nomes Adicionados */}
            <div> 
            {
                listaPresenca.map((inputFrase, index) => (
                    <Aula08_Nome inputFrase={inputFrase} index={index} botaoExcluir={botaoExcluir}/>
                ))
            }
            </div>

            <button className="btn btn-primary" onClick={botaoLimpar}> Limpar lista </button>
        </div>
    )
}



export default Aula08_ListaNomes;