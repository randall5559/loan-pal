import React from 'react';
import './App.css';

import { akitaDevtools } from '@datorama/akita';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './Landing';
import Form from './Form';
import Header from './Header';

akitaDevtools();

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/form" component={Form} />
      </Switch>
    </Router>
  );
}
export default App;
