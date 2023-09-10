import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Signup from './pages/Signup'; 

function App() {
  return (
    <Router> 
     <div className="App"> 
      <Routes>
        <Route path="/" element={<Signup/>}>
        </Route>
      </Routes>
     </div>
    </Router>
  );
}

export default App;
