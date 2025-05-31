import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  // Alterna o menu aberto/fechado
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className='header'>
      <div className='div-header' style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
      }}>
        <div style={{
          color: '#666',
          fontWeight: 'bold',
          fontSize: '24px'
        }}>
          Nutricionista Lara Beatriz
        </div>

        {/* Menu tradicional para desktop e mobile aberto */}
        <nav
          className="menu-desktop"
          style={{
            display: menuAberto ? 'flex' : undefined,
            flexDirection: menuAberto ? 'column' : undefined,
            position: menuAberto ? 'absolute' : undefined,
            top: menuAberto ? '60px' : undefined,
            right: menuAberto ? '20px' : undefined,
            backgroundColor: menuAberto ? '#e5dede' : undefined,
          
            padding: menuAberto ? '10px' : undefined,
            borderRadius: menuAberto ? '8px' : undefined,
            gap: menuAberto ? '20px' : '40px',
            zIndex: menuAberto ? 1000 : undefined,
          }}
        >
          <Link to="/" style={{ color: '#666', fontWeight: 'bold', textDecoration: 'none', fontSize: '20px' }}>Serviços</Link>
          <Link to="/quem-sou-eu" style={{ color: '#666', fontWeight: 'bold', textDecoration: 'none', fontSize: '20px' }}>Quem Sou Eu?</Link>
          <Link to="/contato" style={{ color: '#666', fontWeight: 'bold', textDecoration: 'none', fontSize: '20px' }}>Contato</Link>
        </nav>

        {/* Ícone de menu para mobile */}
        <div className="menu-mobile" style={{
          color: '#666',
          cursor: 'pointer',
          //display: 'block' // mostramos o ícone, o CSS já cuida do display real por media query
        }} onClick={toggleMenu}>
          <FaBars size={24} />
        </div>
      </div>
    </header>
  );
}

export default Header;
