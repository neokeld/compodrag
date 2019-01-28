import React from 'react';
import { Box, Grommet } from 'grommet';

export const GrommetPage = () => (
<Grommet plain full>
 <Box fill>
   <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
     <Box
       width='medium'
       background='light-2'
       elevation='small'
       align='center'
       justify='center'
     >
       sidebar
     </Box>
     <Box flex align='center' justify='center'>
       app body
     </Box>
   </Box>
 </Box>
</Grommet>
);
