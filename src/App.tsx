import React from 'react';
import './App.css';

import { akitaDevtools } from '@datorama/akita';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './Landing';

akitaDevtools();

function App() {
  return (
    <Router>
      <Route to="/">
        <Landing />
      </Route>
    </Router>
  );
}
export default App;
