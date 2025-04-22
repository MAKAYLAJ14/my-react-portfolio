import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  currentPage: string; // Define the prop type
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const [open] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <h1 className="navbar-brand">Makayla's Portfolio</h1>
            <div style={{ borderLeft: '4px solid white', height: '80px', margin: '0 0px' }}></div>
            <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'} aria-current="page">About</Link>
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
};

export default Navbar;