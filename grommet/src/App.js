import React, { Component } from 'react';
import { Grommet } from 'grommet';

import { AppBar } from './AppBar'; 
import { AppBarContent } from './AppBarContent';

const theme = {
  global: {
    colors: {
      brand: 'rgb(125, 76, 219)',
    },
    font: {
      family: 'Montserrat',
      size: '14px',
      height: '20px'
    }
  }
};

class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        <AppBar>
	    <AppBarContent />
	</AppBar>
      </Grommet>
    );
  }
}

export default App;
