import '../components/styles.css'

const Aula08_Nome = ({inputFrase,index,botaoExcluir}) => {
    return (
        <div className='card churrasco'> 
        <p key={index}> 
        {index + 1} -
        <span> {inputFrase} </span>
        <br/>
        <button onClick={() => botaoExcluir(inputFrase)} className='btn btn-primary'> Excluir </button>
        </p>
        </div>
    )
}

export default Aula08_Nome;