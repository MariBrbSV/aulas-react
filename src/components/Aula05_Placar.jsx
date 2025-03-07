import { useState } from "react";
import '../../public/style_placar.css'

const Aula05_Placar = () => {
    const [contadortimeum, setContador_time1] = useState(0); 
    const [contadortimedois, setContador_time2] = useState(0);

    // Time 1

    function aumentar_time1() {
        setContador_time1(contadortimeum+1)
    }

    function diminuir_time1() {
        if (contadortimeum>0) {
             setContador_time1(contadortimeum-1)
        }
       
    }

    // Time 2

    function aumentar_time2() {
        setContador_time2(contadortimedois +1)
    }

    function diminuir_time2() {
        if (contadortimedois >0) {
             setContador_time2(contadortimedois -1)
        }
       
    }
    


    return (
        <div className="card card-placar">
            <h1 className="fonte"> Placar Eletrônico</h1>
            <div className="placar-container">
            <div className="timeum"> 
            <h3> Time 1</h3>
            <h1> {contadortimeum} </h1>
            <div>
            <button className="btn btn-light" onClick={aumentar_time1}> Aumentar </button>
            <button className="btn btn-light bta" onClick={diminuir_time1}> Diminuir </button>
            </div>
            </div>

            <div className="placar-x"> 
            <h1> X </h1>
            </div>

            <div className="timedois"> 
            <h3> Time 2</h3>
            <h1> {contadortimedois} </h1>
            <button className="btn btn-light" onClick={aumentar_time2}> Aumentar </button>
            <button className="btn btn-light bta" onClick={diminuir_time2}> Diminuir </button>
            </div>
            </div>
        </div>

    )

}

export default Aula05_Placar;