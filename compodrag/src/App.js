import React, { Component } from 'react';
import { Grommet } from 'grommet';

import { ChooseCollection } from './ChooseCollection';

const theme = {
  global: {
    font: {
      family: 'Montserrat',
      size: '14px',
      height: '20px',
    },
  },
};

class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
          <ChooseCollection />
      </Grommet>
    );
  }
}

export default App;
