import "./styles.css"


const Aula03_Filmes = ({foto, titulo, genero, botao}) => {
    return (
        <div className="card"> 
            <div> 
                <img className="img-cartaz" src={foto}/>
                <h3> {titulo} </h3>
                <p> {genero} </p>
                <a href={botao}> <button className="btn btn-primary"> Assistir </button></a>
            </div>
        </div>
    )
}

export default Aula03_Filmes