import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/SiteLogo-noBackground.png" alt="Logo do Site" />
        </Link>

        <ul className="nav-links">
          <li><Link to="/miaus">Adote um Miau</Link></li>
          <li><Link to="/cadastro-miau">Cadastrar um Miau</Link></li>
          <li><Link to="/solicitar-resgate">Solicitar um Resgate</Link></li>
          <li><Link to="/cadastro-usuario">Criar Conta</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/logout">Sair</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
