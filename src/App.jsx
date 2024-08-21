import Header from './Componentes/Header';
import ConteudoPrincipal from './Componentes/ConteudoPrincipal';
import Footer from './Componentes/Footer'; 
import { Outlet } from 'react-router-dom'; // Importando o Outlet do react-router-dom, uma janela de saída para renderizar o conteúdo da rota
// import logo from "./assets/jeep.jpg";

function App() {
 
  return (
    <>
      <Header />
      {/* <img src={logo} alt="Jeep" />  */}
      {/* Imagem adicionada */}
      <Outlet /> 
      <Footer />
    </>
  )
}

export default App
