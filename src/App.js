import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Servicos from './pages/Servicos';
import QuemSouEu from './pages/QuemSouEu';
import Contato from './pages/Contato';
import Header from './Header';


function App() {
return (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Servicos />} /> {/* Rota inicial agora renderiza Servicos */}
      <Route path="/contato" element={<Contato />} />
      <Route path="/quem-sou-eu" element={<QuemSouEu />} />
    </Routes>
  </Router>
);
}

export default App;