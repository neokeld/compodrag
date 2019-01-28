import React from 'react';
import { Box } from 'grommet';

import { CollectionCell } from './CollectionCell';

export const ChooseCollection = () => (
<>
<Box fill align='center'>
  <h1>Choose a collection:</h1>
</Box>
<Box fill>
   <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
     <CollectionCell imgSrc='a.png' path='/atlaskit' name='Atlaskit' />
     <CollectionCell imgSrc='blueprint_kit.gif' path='/blueprint' name='Blueprint' background='light-2' />
     <CollectionCell imgSrc='e.png' path='/evergreen' name='Evergreen' />
   </Box>
</Box>
<Box fill>
   <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
     <CollectionCell imgSrc='grommet-2-open-theme.png' path='/grommet' name='Grommet' background='light-2' />
     <CollectionCell imgSrc='r.png' path='/rebass' name='Rebass' />
     <CollectionCell imgSrc='s.png' path='/semanticui' name='Semantic-ui' background='light-2' />
   </Box>
</Box>
</>
);
