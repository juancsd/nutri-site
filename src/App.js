import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Servicos from './pages/Servicos';
import QuemSouEu from './pages/QuemSouEu';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Header from './Header';
import Footer from './footer'; // Importe o componente Footer

function App() {
return (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/quem-sou-eu" element={<QuemSouEu />} />
    </Routes>
    <Footer /> {/* Renderize o componente Footer aqui */}
  </Router>
);
}

export default App;