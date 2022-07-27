import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './router/AppRoutes';
import Header from './header/Header';
import NavBar from './navBar/NavBar';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );

}

export default App;
