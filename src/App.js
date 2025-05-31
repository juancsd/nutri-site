import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Servicos from './pages/Servicos';
import QuemSouEu from './pages/QuemSouEu';
import Home from './pages/Home'
import Contato from './pages/Contato';
import Header from './Header';


function App() {
return (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> {/* Rota inicial agora renderiza Servicos */}
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/quem-sou-eu" element={<QuemSouEu />} />
    </Routes>
  </Router>
);
}

export default App;