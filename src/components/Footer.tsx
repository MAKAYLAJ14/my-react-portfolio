import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© 2024 Makayla Johnson </p>
      <div>
        <a href="https://www.facebook.com" style={{ color: 'white', margin: '0 10px' }}>Facebook</a>
        <a href="https://www.twitter.com" style={{ color: 'white', margin: '0 10px' }}>Twitter</a>
        <a href="https://www.linkedin.com" style={{ color: 'white', margin: '0 10px' }}>LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer; 