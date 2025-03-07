import { useState } from "react";
import '../../public/style_calc.css'

const Aula05_Calculadora = () => {
    const [numerador1, setNumerador1] = useState(''); 
    const[numerador2, setNumerador2] = useState('');
    const[sinal, setSinal] = useState('+');
    const [resultado, setResultado] = useState('');
    

    function botaoCalcular() {
        let n1 = Number(numerador1);
        let n2 = Number(numerador2);

        if (sinal == '+') {
            setResultado(n1+n2);
        } else if (sinal == '-') {
            setResultado(n1-n2)
        } else if (sinal == '*') {
            setResultado(n1*n2)
        } else if (sinal == '/') {
            setResultado(n1/n2)
        }
    }

    return (
        <div className="card-geral">
            <h1> Calculadora </h1>
            <div className="card-calc"> 
        <div> 
            <input className="numerador" value={numerador1} onChange={(e) => setNumerador1(e.target.value)} type="number"/>
        </div>
        <div> 
            <select value={sinal} className="numerador" onChange={(e) => setSinal(e.target.value)}>
            <option value={"+"}> + </option>
            <option value={"-"}> - </option>
            <option value={"*"}> * </option>
            <option value={"/"}> / </option>
            </select>
        </div>
        <div> 
            <input className="numerador" onChange={(e) => setNumerador2(e.target.value)} type="number"/>
        </div>
        </div>
        
            <button className="botao-calc btn btn-primary" onClick={botaoCalcular}>=</button>
            
            <b className="resultado"> {resultado} </b>
        
        </div> 
    )
}


export default Aula05_Calculadora;