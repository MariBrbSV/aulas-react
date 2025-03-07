import React from "react";

const Aula03_IMC = ({nome,peso,altura}) => {
    let imc = (peso / (altura * altura)).toFixed(2);
    return (
            <div className="card-imc"> 
                <p style={{fontFamily:"Raleway"}}> 🖩 Calculadora de IMC </p>
                <p> Nome: {nome} </p>
                <p> Peso: {peso}kg </p>
                <p> Altura: {altura}m </p>
                <p> IMC: {imc}kg/m² </p>
            </div>
   
    )
}

export default Aula03_IMC;