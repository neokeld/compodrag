import React, { Component } from 'react';
import { Grommet, Box } from 'grommet';

import { AppBar } from './AppBar'; 
import { AppBarContent } from './AppBarContent';
import { Body } from './Body';
import { SideBar } from './SideBar';

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
      <Grommet theme={theme} full>
	<Box fill>
          <AppBar>
	    <AppBarContent />
	  </AppBar>
          <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
	    <Body />
	    <SideBar />
          </Box>
	</Box>
      </Grommet>
    );
  }
}

export default App;
