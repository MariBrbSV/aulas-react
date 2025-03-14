import { Link, useParams } from "react-router-dom"

const Perfil = () => {
    const {nome} = useParams();
    return (
        <div className="sobre"> 
            <h1> Este é o perfil {nome} </h1>
            <Link to="/" className="btn btn-primary"> Voltar para a página principal </Link>
        </div>
    )
}

export default Perfil;