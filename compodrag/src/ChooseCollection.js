import React from 'react';
import { Box } from 'grommet';

export const ChooseCollection = () => (
<>
<Box fill align='center'>
  <h1>Choose a collection:</h1>
</Box>
<Box fill>
   <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
     <Box flex align='center'>
       Atlaskit
     </Box>
     <Box flex align='center'
       background='light-2'
     >
       <img src='blueprint_kit.gif' width='400'/>
       <p>Blueprint</p>
     </Box>
     <Box flex align='center'>
       Evergreen
     </Box>
   </Box>
</Box>
<Box fill>
   <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
     <Box flex align='center'
       background='light-2'
	>
       <img src='grommet-2-open-theme.png' width='400'/>
       <p>Grommet</p>
     </Box>
     <Box flex align='center'>
       Rebass
     </Box>
     <Box flex align='center'
       background='light-2'
     >
       Semantic-ui
     </Box>
   </Box>
</Box>
</>
);
