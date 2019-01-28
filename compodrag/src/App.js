import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Main } from './pages/Main';
import { Atlaskit } from './pages/Atlaskit';
import { Blueprint } from './pages/Blueprint';
import { Evergreen } from './pages/Evergreen';
import { Grommet } from './pages/Grommet';
import { Rebass } from './pages/Rebass';
import { Semanticui } from './pages/Semanticui';


const App = () => (
  <Router>
    <>
      <Switch>
        <Route exact path="/" component={Main} />
	<Route path="/atlaskit" component={Atlaskit} />
        <Route path="/blueprint" component={Blueprint} />
        <Route path="/evergreen" component={Evergreen} />
	<Route path="/grommet" component={Grommet} />
        <Route path="/rebass" component={Rebass} />
        <Route path="/semanticui" component={Semanticui} />
      </Switch>
    </>
  </Router>
);

export default App;
