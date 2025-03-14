import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Principal from "./pages/Principal"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"
import Perfil from "./pages/Perfil"
import Inicio from "./pages/Inicio"
import Detalhes from "./pages/Detalhes"
import Contato from "./pages/Contato"
import Filme from "./pages/Filme"


const App = () => {
  return(
    <Router> 
      <Routes> 
        <Route path="/" element={<Principal/>} > </Route>
        <Route path="/sobre" element={<Sobre/>} > </Route>
        <Route path="/*" element={<NotFound/>} > </Route>
        <Route path="/perfil" element={<Perfil/>} > </Route>
        <Route path="/inicio" element={<Inicio/>} > </Route>
        <Route path="/detalhes" element={<Detalhes/>} > </Route>
        <Route path="/contato" element={<Contato/>} > </Route>
        <Route path="/filme/:id" element={<Filme/>} > </Route>
      </Routes>
    </Router>
  )
}

export default App;