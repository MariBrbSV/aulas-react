const Aula10_Produto = ({ produto,pos }) => {
    return (
        <div>
            <div className="card card-produtos2 text-center"> 
                <img className="img-produtos" src={produto.imagem}/>
                <p className="titulo" key={pos}> {produto.nomeProduto} </p>
                <p> R$ {produto.preco} </p>
                {
                produto.freteGratis == true && (
                    <p className="frete"> Frete <span style={{color: "blue"}}> Grátis </span> </p>
                )
                } 
                {
                produto.freteGratis == false && (
                    <p className="frete"> Frete <span style={{color: "blue"}}> Pago</span> </p>
                )
                } 
                <a href={produto.link}> <button className="btn btn-primary"> Ver Produto </button> </a>
            </div>
        </div>
    )
}

export default Aula10_Produto;