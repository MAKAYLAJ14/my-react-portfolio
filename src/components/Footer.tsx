import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© 2024 Makayla Johnson </p>
      <div>
        <a href="https://github.com/MAKAYLAJ14" style={{ color: 'white', margin: '0 10px' }}>GitHub</a>
        <a href="https://www.linkedin.com/in/makayla-johnson-b09457211/" style={{ color: 'white', margin: '0 10px' }}>LinkedIn</a>
        <a href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage" style={{ color: 'white', margin: '0 10px' }}>Indeed</a>
      </div>
    </footer>
  );
};

export default Footer; 