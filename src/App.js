import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Header from './components/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;