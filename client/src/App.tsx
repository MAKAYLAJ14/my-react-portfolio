import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../src/components/Navigation'; 

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;