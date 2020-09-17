import React from 'react';

import { akitaDevtools } from '@datorama/akita';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './Landing';
import Form from './Form';
import Header from './Header';
import Search from './Search';

akitaDevtools();

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/form" component={Form} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
}
export default App;
