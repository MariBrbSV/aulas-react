import { Link, useNavigate } from "react-router-dom"

const Aula13 = () => {
    const navigate = useNavigate();

    return (
        <div className="card">
            <h3> Aula 13 - React Router - Navegação em React </h3>
            <p> Biblioteca que permite criar e gerenciar rotas em aplicações React </p>
            <div className="d-flex gap-4"> 
            <div className="card w-50 centralizar">
            <h3> Navegação com link </h3>
            <br/>
            <Link to="/" className="btn btn-primary btn-arrumar"> Página Principal </Link>
            <br/>
            <Link to="/sobre" className="btn btn-primary btn-arrumar"> Sobre </Link>
            <br/>
            <Link to="/pagina_inexistente" className="btn btn-primary btn-arrumar"> Página Inexistente </Link>
            <br/>
            </div>
            <div className="card w-50 centralizar"> 
            <h3> Navegação com useNavigate </h3>
            <button className="btn btn-primary btn-arrumar" onClick={() => navigate("/sobre")}> Sobre </button>
            </div>
            <div className="card w-50 centralizar"> 
            <h3> Rota dinâmica com useParams </h3>
            <button className="btn btn-primary btn-arrumar" onClick={() => navigate("/perfil/Marcelo")}> Perfil do Marcelo </button>
            <br />
            <button className="btn btn-primary btn-arrumar" onClick={() => navigate("/perfil/Paula")}> Perfil da Paula </button>
            </div>
            <div className="card w-50 centralizar"> 
            <h3> Rotas </h3>
            <button className="btn btn-primary btn-arrumar" onClick={() => navigate("/inicio")}> Início </button>
            <br />
            <button className="btn btn-primary btn-arrumar" onClick={() => navigate("/detalhes")}> Detalhes </button>
            <br />
            <button className="btn btn-primary btn-arrumar" onClick={() => navigate("/contato")}> Contato </button>
            <br />
            <button className="btn btn-primary btn-arrumar" onClick={() => navigate("/filme/6")}> Filme </button>
            </div>
            </div>
        </div>
    )
}

export default Aula13;