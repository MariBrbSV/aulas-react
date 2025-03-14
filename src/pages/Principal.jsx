import Cabecalho from "../components/Cabecalho"
import Aula01 from "../components/Aula01"
import Aula02 from "../components/Aula02"
import Aula03 from "../components/Aula03"
import Aula03_Filmes from "../components/Aula03_Filmes"
import Aula03_IMC from "../components/Aula03_IMC"
import Aula04 from "../components/Aula04"
import Aula04_Exercicio from "../components/Aula04_Exercicios"
import Aula05 from "../components/Aula05"
import Aula07 from "../components/Aula07"
import Aula08 from "../components/Aula08"
import Aula09 from "../components/Aula09"
import Aula10 from "../components/Aula10"
import Aula11 from "../components/Aula11"
import Aula12 from "../components/Aula12"
import Aula13 from "../components/Aula13"
import '../components/styles.css'
import Aula08_ListaNomes from "../components/Aula08_ListaNomes"



const Principal = () => {
  return (
    <div className="container">
    <Cabecalho aula='React Native'/>
    <main className="content"> 
      <h2> Aulas </h2> 
        <div className="cards-container">
          <Aula01/>
          <Aula02/>
          <Aula03/>
          <div className="divfilmes"> 
          <Aula03_Filmes foto='https://umacadeiraporfavor.wordpress.com/wp-content/uploads/2013/09/totoro1large.jpg' titulo='Meu Amigo Totoro' genero='Animação' botao='https://www.primevideo.com/-/pt/detail/My-Neighbor-Totoro/0SXLC2473O1W7CYALLVTM0QODX' />
          <Aula03_Filmes foto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGrj_Hjv3-OEBJDWMZXrrSqwigUwOAD9RtFYf1vIlZRaDAGNlYqnvcbLS1hx6vir9Mv8&usqp=CAU' titulo='O Serviço de Entregas da Kiki' genero='Animação' botao='https://www.primevideo.com/-/pt/detail/Kikis-Delivery-Service/0TIXEDQYZKLZ25G5ZOVTL75LQ9' />
          <Aula03_Filmes foto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVD14Yq7TXkMEuCBTSZK0Os-_cdJvHl77Rpulim2UeQyTYLcq4kzL3AlGipBAL2ccPbBc&usqp=CAU' titulo='O Castelo Animado' genero='Animação' botao='https://www.adorocinema.com/filmes/filme-50409/' />
          <Aula03_Filmes foto='https://m.media-amazon.com/images/M/MV5BMzk3NWViZjctMGVhNy00OWJjLTkxYWQtNmZmMzI2ZDRlNTUyXkEyXkFqcGc@._V1_.jpg' titulo='Mary e a flor da feiticeira' genero='Animação' botao='https://www.primevideo.com/dp/amzn1.dv.gti.f9529ad4-fdbe-47af-87f2-97190064f3cc?autoplay=0&ref_=atv_cf_strg_wb' />
          </div>
          <Aula03_IMC />
          <Aula04/>
          <Aula04_Exercicio/>
          <Aula05/>
          <Aula07 />
          <Aula08 />
          <Aula09 />
          <Aula10 />
          <Aula11 />
          <Aula12 />
          <Aula13 />
        </div>
        
    </main>
    </div>
  )
}

export default Principal;