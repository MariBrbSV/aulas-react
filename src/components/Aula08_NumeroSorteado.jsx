import '../components/styles.css'

const Aula08_NumeroSorteado = ({numero, index, botaoExcluir}) => {
    return (
        <div className='card itens'> 
        <p key={index}> 
        {index + 1} º Sorteado:
        <br/> <span className='numero'> {numero} </span>
        <br/>
        <button onClick={() => botaoExcluir(numero)} className='btn btn-primary'> Excluir </button>
        </p>
        </div>
    )
}


export default Aula08_NumeroSorteado;