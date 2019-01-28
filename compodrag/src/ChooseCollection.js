import React from 'react';
import { Box, Image, Text, RoutedAnchor } from 'grommet';

import { CollectionCell } from './CollectionCell';

export const ChooseCollection = () => (
<>
<Box fill align='center'>
  <h1>Choose a collection:</h1>
</Box>
<Box fill>
   <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
       <Box flex width='medium' height='medium'>
         <Image src='a.png' fit='contain' alt='atlaskit ui example'/>
         <RoutedAnchor path='/atlaskit'>
	   <Text alignSelf='center'>Atlaskit</Text>
     </RoutedAnchor>
       </Box>
       <Box flex width='medium' height='medium' background='light-2'>
         <Image src='blueprint_kit.gif' fit='contain' alt='blueprint ui example'/>
       
     <RoutedAnchor path='/blueprint'>
	<Text alignSelf='center'>Blueprint</Text>
     </RoutedAnchor>
	</Box>
       <Box flex justify='center' width='medium' height='medium'>
         <Image src='e.png' fit='contain' alt='evergreen ui example'/>
     <RoutedAnchor path='/evergreen'>
	<Text alignSelf='center'>Evergreen</Text>
     </RoutedAnchor>
	</Box>
   </Box>
</Box>
<Box fill>
   <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
       <Box flex width='medium' height='medium' background='light-2' onclick='() => { console.log("xd") }'>
         <Image src='grommet-2-open-theme.png' fit='contain' alt='grommet ui example'/>
         <RoutedAnchor path='/grommet'>
	   <Text alignSelf='center'>Grommet</Text>
         </RoutedAnchor>
	</Box>
       <Box flex width='medium' height='medium'>
         <Image src='r.png' fit='contain' alt='rebass ui example'/>
     <RoutedAnchor path='/rebass'>
	<Text alignSelf='center'>Rebass</Text>
     </RoutedAnchor>
	</Box>
     <CollectionCell />
     </Box>
</Box>
</>
);
