import React from 'react';
import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';

export const AppBarContent = (props) => (
<>
  <Heading level='3' margin='none'>Grommet React App</Heading>
  <Button icon={<Notification />} onClick={() => {}} />
</>
);
