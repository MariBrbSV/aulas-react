import { Link, useNavigate } from "react-router-dom"

const Detalhes = () => {
    const navigate = useNavigate();

    return (
        <div className="sobre"> 
            <h1> Mais Informações: </h1>
            
            
            <button onClick={() => navigate("/contato")} className="btn btn-primary"> Ir para <b> contato </b> </button>
        </div>
    )
}

export default Detalhes;