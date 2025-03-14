import { Link, useNavigate } from "react-router-dom"

const Detalhes = () => {
    const navigate = useNavigate();

    return (
        <div className="sobre"> 
            <h1> Entre em contato </h1>
            
            
            <button onClick={() => navigate("/inicio")} className="btn btn-primary"> Ir para <b> início </b> </button>
        </div>
    )
}

export default Detalhes;