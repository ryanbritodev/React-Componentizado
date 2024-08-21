import { Link } from "react-router-dom";
// Importando o Link do react-router-dom  

function Header() {
  return (
    <header>
      <h1>Meu site</h1>
      <nav>
            <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="">Serviços</Link></li>
            <li><Link to="">Contato</Link></li>
            {/* Não utilizar o a para fazer links para rotas, consome muito do servidor, pois carrega a pagina inteira */}
            {/* https://open.spotify.com/intl-pt - Componentes */}
            </ul>
        </nav>
    </header>
  );
}

export default Header;
