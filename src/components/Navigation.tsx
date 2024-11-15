import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navigation: React.FC = () => {
  const currentPage = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1 className="navbar-brand">Makayla's Portfolio</h1>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar} 
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'} aria-current="page">About Me</Link>
            </li>
            <li className="nav-item">
              <Link to='/Portfolio' className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to='/Resume' className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
            </li>
            <li className="nav-item">
              <Link to='/Contact' className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;