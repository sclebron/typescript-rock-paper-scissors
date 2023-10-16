import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './pages/game/game.ts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Game/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
