import imgReact from '../assets/react.svg'
import './styles.css'

const Cabecalho = ({aula}) => {
    return (
        <header className='header'> 
            <img className='logo' src={imgReact} alt="Logo React"/>
            <div className='title'> 
                <h1> SENAI  - Desenvolvimento de Sistemas </h1>
                <p> Aulas de {aula} </p>
            </div>
            <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vD2mP9TW72FP5c259XzShIy4XnnYKiFH9Q&s" alt="Logo do Senai" height={70}/>
        </header>
    )
}

export default Cabecalho;