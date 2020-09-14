import React from 'react';
import logo from './logo.svg';
import './App.css';

import Box from '@material-ui/core/Box/Box';
import { akitaDevtools } from '@datorama/akita';
import { BrowserRouter as Router, Route } from "react-router-dom";

akitaDevtools();

function App() {
  return (
    <Router>
      <Route to="/">
        <Box display="flex" height="100%">
          
        </Box>
      </Route>
    </Router>
  );
}
export default App;
