import React from 'react';
import { Grommet } from 'grommet';

import { ChooseCollection } from '../ChooseCollection';

const theme = {
  global: {
    font: {
      family: 'Montserrat',
      size: '14px',
      height: '20px',
    },
  },
};

export const Main = () => (
      <Grommet theme={theme}>
          <ChooseCollection />
      </Grommet>
);

