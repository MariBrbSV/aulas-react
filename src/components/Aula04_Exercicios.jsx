const Aula04_Exercicio = () => {

    const botao1 = () => {
        alert('Clicou no botão 1')
    }
    const botao2 = () => {
        alert('Clicou no botão 2')
    }
    const alteracaoTexto = (event) => {
        console.log(event.target.value)
    }
    const entrouMouse = (event) => {
        event.target.style.backgroundColor = 'red'
    }
    const saidaMouse = (event) => {
        event.target.style.backgroundColor = 'green'
    }
    const handleKeyDown = (event) => {
        console.log('Tecla pressionada:', event.key);
    }
    const keyInput = (e) => {
        if (e.key == 'a' || e.key == 'A') {
            e.target.style.color = 'blue';
        } else if (e.key == 'p' || e.key == 'P') {
            e.target.style.color = 'black';
        } else if (e.key == 'v' || e.key == 'V') {
            e.target.style.color = 'red';
        } else if (e.key == 'y' || e.key == 'Y') {
            e.target.style.color = 'yellow';
        } else if (e.key == 'g' || e.key == 'G') {
            e.target.style.color = 'green';
        } else if (e.key == '+' ) {
            e.target.style.fontSize = '20px';
        } else if (e.key == '-') {
            e.target.style.fontSize = '10px'
        }
    }

    return (
        <div>
            <button onClick={botao1} >Botão 1</button>
            <button onClick={botao2} >Botão 2</button>
            <input type="text" placeholder="Digite um texto" onChange={alteracaoTexto} />
            <div style={{width:100, height:100, backgroundColor:'green'}}
                onMouseEnter={entrouMouse} onMouseLeave={saidaMouse}
                ></div>
            <input type="text" placeholder="Digite um texto" onKeyDown={handleKeyDown} />
            <input type="text"
              onClick={() => console.log('Clicou no input')}
              onChange={() => console.log('Alterou o input')}
              onMouseEnter={() => console.log('Mouse entrou no input')}
              onMouseLeave={() => console.log('Mouse saiu do input')}
              onKeyDown={keyInput}
            />
        </div>
    )
}

export default Aula04_Exercicio;