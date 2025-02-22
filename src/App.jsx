import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CadastroUsuario from './pages/CadastroUsuario';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="AppClass">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
