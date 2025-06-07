import React from 'react';
import './footer.css';
import './App.css';
import imglogo from './images/instagram.png'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <nav>
        {/* Links de navegação, se houver */}
      </nav>
      <div className="social-links">
        <a 
          href="http://instagram.com/larabeatriznutri" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={imglogo} 
            alt="Instagram" 
            width="30" 
            height="30" 
          />
        </a>
      </div>

      <p className='paragrafo'>&copy; {currentYear} Nutricionista Lara Beatriz. Todos os direitos reservados.</p>


    </footer>
  );
}

export default Footer;