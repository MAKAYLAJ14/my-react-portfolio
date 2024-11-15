import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1>Makayla's Portfolio</h1>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'} aria-current="page">About Me</Link>
            </li>
            <li className="nav-item">
              <Link to='/Portfolio' className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'} aria-current="page">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to='/Resume' className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'} aria-current="page">Resume</Link>
            </li>
            <li className="nav-item">
              <Link to='/Contact' className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'} aria-current="page">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;