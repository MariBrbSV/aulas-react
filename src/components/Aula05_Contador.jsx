import { useState } from "react";


const Aula05_Contador = () => {
    const [contador, setContador] = useState(0); 

    function aumentar() {
        setContador(contador+1)
    }

    function diminuir() {
        setContador(contador-1)
    }
    


    return (
        <div className="card">
            <p> Valor: {contador} </p>
            <button onClick={aumentar}> Aumentar </button>
            <button onClick={diminuir}> Diminuir </button>
        </div>
    )
}

export default Aula05_Contador;