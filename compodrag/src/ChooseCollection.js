import React from 'react';
import { Box, Image, Text } from 'grommet';

export const ChooseCollection = () => (
<>
<Box fill align='center'>
  <h1>Choose a collection:</h1>
</Box>
<Box fill>
   <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
     <Box flex width='medium' height='medium'>
       <Image src='a.png' fit='contain' alt='atlaskit ui example'/>
       <Text alignSelf='center'>Atlaskit</Text>
     </Box>
     <Box flex width='medium' height='medium' background='light-2'>
       <Image src='blueprint_kit.gif' fit='contain' alt='blueprint ui example'/>
       <Text alignSelf='center'>Blueprint</Text>
     </Box>
     <Box flex justify='center' width='medium' height='medium'>
       <Image src='e.png' fit='contain' alt='evergreen ui example'/>
       <Text alignSelf='center'>Evergreen</Text>
     </Box>
   </Box>
</Box>
<Box fill>
   <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
     <Box flex width='medium' height='medium' background='light-2'>
       <Image src='grommet-2-open-theme.png' fit='contain' alt='grommet ui example'/>
       <Text alignSelf='center'>Grommet</Text>
     </Box>
     <Box flex width='medium' height='medium'>
       <Image src='r.png' fit='contain' alt='rebass ui example'/>
       <Text alignSelf='center'>Rebass</Text>
     </Box>
     <Box flex width='medium' height='medium' background='light-2'>
       <Image src='s.png' fit='contain' alt='semantic ui example'/>
       <Text alignSelf='center'>Semantic-ui</Text>
     </Box>
   </Box>
</Box>
</>
);
