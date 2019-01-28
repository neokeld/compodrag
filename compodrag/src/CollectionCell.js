import React from 'react';
import { Box, Image, Text, RoutedAnchor } from 'grommet';
import { withRouter } from 'react-router-dom';

export const CollectionCell = withRouter(({ history }) => (
  <Box flex width='medium' height='medium' background='light-2' align='center'>
    <Image src='s.png' fit='contain' alt='semantic ui example' onClick={() => {
      history.push("/semanticui");
      console.log("sem");
    }} />
    <RoutedAnchor path='/semanticui'>
      <Text>Semantic-ui</Text>
    </RoutedAnchor>
  </Box>
));
