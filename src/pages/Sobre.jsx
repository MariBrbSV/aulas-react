import { Link } from "react-router-dom"

const Sobre = () => {
    return (
        <div className="sobre"> 
            <h1> Sobre </h1>
            <p> Projeto desenvolvido por: Mariana Borba no <b> SENAI </b> </p>
            
            <Link to="/" className="btn btn-primary"> Voltar para a página principal </Link>
        </div>
    )
}

export default Sobre;