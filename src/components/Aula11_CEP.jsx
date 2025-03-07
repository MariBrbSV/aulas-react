import { useState } from "react";

const Aula11_CEP = () => {
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    async function buscarDados() {
        if (cep.length !== 8) {
            alert("Por favor, insira um CEP válido com 8 dígitos.");
            return;
        }

        try {
            const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const dados = await resposta.json();

            if (dados.erro) {
                alert("CEP não encontrado.");
                return;
            }

            setLogradouro(dados.logradouro || "Não informado");
            setBairro(dados.bairro || "Não informado");
            setCidade(dados.localidade || "Não informado");
            setEstado(dados.uf || "Não informado");
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            alert("Erro ao buscar os dados. Tente novamente.");
        }
    }

    return (
        <div className="card">
            <div className="centralizar">
            <h3>Buscar CEP</h3>
            <input
                className="input-cep"
                type="text"
                maxLength="8"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                placeholder="Digite o CEP"
            />
            <button onClick={buscarDados} className="btn btn-primary botao-cep">
                Buscar
            </button>
            
            <div className="infos"> 
            <p><b>Logradouro:</b> {logradouro}</p>
            <p><b>Bairro:</b> {bairro}</p>
            <p><b>Cidade:</b> {cidade}</p>
            <p><b>Estado:</b> {estado}</p>
            </div>
        </div>
        </div>
    );
};

export default Aula11_CEP;
