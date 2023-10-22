import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes,Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
  <div >
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
      </Routes>
    </Router>
    
  </div>
  );
}

export default App;
