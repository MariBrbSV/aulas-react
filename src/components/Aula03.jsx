import Aula03_IMC from "./Aula03_IMC";
import "./styles.css"

const Aula03 = () => {
    return (
        <div className="card">
            <h3> Aula 03 - Propos e Estados </h3>
            <p> Props são usadas para passar dados de componentes pai 
                para componentes filhos e um hr </p>
            <hr />
            <div className="div-imc">
                <Aula03_IMC nome={'Mariana'} peso={51} altura={1.53} />
                <Aula03_IMC nome={'Marina Sena'} peso={55} altura={1.72} />
                <Aula03_IMC nome={'Oruam'} peso={66} altura={1.68} />
            </div>
        </div>
    ) 
}

export default Aula03;