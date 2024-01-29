import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Show from './component/Show';
import Create from './component/Create';
import Edit from './component/Edit';


import {BrowserRouter, Router, Routes} from `reac-router-dom`

function App() {
  return (
    <>
      <div className="App">
      <BrowserRouter>
       <Routes>
        <Router path='/' element={ <Show /> } />
        <Router path='/' element={ <Create /> } />
        <Router path='/' element={ <Edit /> } />
        </Routes>
      </BrowserRouter>

      
      </div>

    </>
  );
}

export default App
