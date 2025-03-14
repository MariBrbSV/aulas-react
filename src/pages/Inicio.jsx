import { Link } from "react-router-dom"

const Inicio = () => {
    return (
        <div className="sobre"> 
            <h1> Seja vem vindo(a)!</h1>
            
            <Link to="/detalhes" className="btn btn-primary"> Ir para a página <b> detalhes </b> </Link>
        </div>
    )
}

export default Inicio;