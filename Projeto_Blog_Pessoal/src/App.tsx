import React from 'react';
import Navibar from './components/estaticos/navbar/Navibar';
import Footer from './components/estaticos/footer/Footer';
import { Grid } from '@material-ui/core';
import './App.css';
import Home from './paginas/home/Home';

function App() {
  return (
      <>
         <Navibar />
         <Home />
         <Footer />
      </>
  );
}

export default App;
