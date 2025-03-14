import estilos from './Aula10.module.css'

const Aula12_Produto = ({produto, excluirProduto, alterarProduto}) => {
    console.log(produto);
    
    return (
        <div className={estilos.cardProduto}>
            <img src={produto.imagem} className={estilos.imagemProduto} />
            <h2 className={estilos.nomeProduto}>{produto.nome}</h2>
            <p className={estilos.precoProduto}>{produto.preco}</p>
            <p>{produto.categoria}</p>
            {
                // if (produto.freteGratis == true) { }
                produto.fretegratis == true && <p>Frete Grátis</p>
            }
            <div className='d-flex flex-column gap-2'>
            <a href={produto.link} className='btn btn-primary'>Ver detalhes</a>
            <button className='btn btn-primary' onClick={() => excluirProduto(produto.id)} >Excluir</button>
            <button className='btn btn-primary' onClick={() => alterarProduto(produto)} >Alterar</button>
            </div>
        </div>
    )
}

export default Aula12_Produto