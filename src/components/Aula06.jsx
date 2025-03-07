import Aula06_Multicomponentes, { MeuComponenteNomeado, MeuComponenteNomeado2 } from "./Aula06_Multicomponentes.jsx";

const Aula06 = () => {
    return (
        <div className="card">
            <h3> Aula 06 - Módulos em Java Script </h3>
            <p> Importância de reutilizarmos os códigos </p>
            <hr />
            <MeuComponenteNomeado />
            <MeuComponenteNomeado2 />
            <Aula06_Multicomponentes />
        </div>
    )
}

export default Aula06;