import Aula02_Comp from "./Aula02_Comp";
import "./Aula02.css";
import Aula02_login from "./Aula02_login";

const Aula02= () => {
    return (
        <div className="card">
            <h3> Aula 02 - Componentes e estilização </h3>
            <p> Criação de componentes reutilizáveis e suas estilizações </p>
            <Aula02_Comp />
            <hr/>

            <p className="titulo"> CSS Externo </p>
            <p className="descricao"> Estilização de componentes com CSS Externo </p>

            <hr />

            <p style={{color: '#0000ff', fontWeight: 'bold'}}> Inline Style </p>
            <p style={{fontStyle:'italic'}}> Estilos aplicados diretamente nos elementos</p>
            <hr />

            <p style={estilos.titulo}> CSS Module </p>
            <p style={estilos.descricao}> Estilos com escopo local para evitar conflito</p>

            <hr />
            <Aula02_login />
        </div>
        
    )
}

const estilos = {
    titulo: {
        color: '#0000ff',
        fontWeight: 'bold'
    },
    descricao: {
        fontStyle: 'italic'
    }
}

export default Aula02;