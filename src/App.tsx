import React from 'react';
import './App.css'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation'; 

const App: React.FC = () => {
  return (
    <>
      <Navigation currentPage={''} />
      <Outlet />
    </>
  );
}

export default App;