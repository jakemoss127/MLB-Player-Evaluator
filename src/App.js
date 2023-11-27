import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Explanation from './components/Explanation';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/explanation" element={<Explanation />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;