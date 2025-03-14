import { useParams } from "react-router-dom";

const Filme = () => {
    const { id } = useParams(); 

    return (
        <div className="sobre"> 
            <h1> Exibindo dados do filme: {id} </h1>
        </div>
    );
};

export default Filme;
