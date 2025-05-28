import { Link } from 'react-router-dom';

function Header() {
return (
  <header style={{
    background: '#bfa084',
    padding: '20px 0',
    marginBottom: '40px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between', // Espaça os elementos horizontalmente
      alignItems: 'center', // Alinha verticalmente ao centro
      padding: '0 20px' // Adiciona um padding lateral para não grudar nas bordas
    }}>
      <div style={{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '24px' // Ajuste o tamanho da fonte conforme necessário
      }}>
        Nutricionista Lata Beatriz
      </div>
      <nav style={{
        display: 'flex',
        gap: '40px'
      }}>
        <Link to="/" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none', fontSize: '20px' }}>Início</Link>
        <Link to="/quem-sou-eu" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none', fontSize: '20px' }}>Quem Sou Eu?</Link>
        <Link to="/contato" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none', fontSize: '20px' }}>Contato</Link>
      </nav>
    </div>
  </header>
);
}

export default Header;