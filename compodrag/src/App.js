import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Main } from './pages/Main';
import { Grommet } from './pages/Grommet';

const App = () => (
  <Router>
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/grommet" component={Grommet} />
      </Switch>
    </>
  </Router>
);

export default App;
