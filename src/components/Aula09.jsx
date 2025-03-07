import { useState, useEffect } from "react";

const Aula09 = () => {
    const [contador, setContador] = useState(0);

    function botaoContador() {
        const novoContador = contador + 1;
        setContador(novoContador);
        // Gravando nossa variável no localStorage no navegador
        localStorage.setItem('Aula09_contador', JSON.stringify(novoContador));
    }

    // O useEffect fica "monitorando" uma variável e executa sempre que ela mudar
    // Este efeito será executado sempre que 'contador' mudar
    useEffect(() => {
        console.log(contador);
        document.title = `Contagem: ${contador}`;
    }, [contador]);

    // [] significa que o efeito deve ser executado apenas uma vez 
    useEffect(() => {
        // Recuperando os dados do localStorage
        const contadorSalvo = localStorage.getItem('Aula09_contador') || 0;
        setContador(JSON.parse(contadorSalvo));
    }, []);

    return (
        <div className="card">
            <h3> Aula 09 - useEffect e localStorage </h3>
            <p> Conhecendo a hook useEffect e aprendendo a armazenar dados localmente </p>
            <hr />
            <p> Você clicou {contador} vezes </p>
            <button className="btn btn-primary" onClick={botaoContador}> Clique Aqui! </button>
        </div>
    )
}

export default Aula09;