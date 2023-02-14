import React from 'react';
import { Route, Routes as Router } from 'react-router-dom';
import Card from './pages/Card';
import Home from './pages/Home';

function Routes() {
  return (
    <Router>
      <Route path="card/:id" element={<Card />} />
      <Route index element={<Home />} />
    </Router>
  );
}
export default Routes;
