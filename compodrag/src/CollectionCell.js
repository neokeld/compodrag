import React from 'react';
import { Box, Image, Text, RoutedAnchor } from 'grommet';
import { withRouter } from 'react-router-dom';

export const CollectionCell = withRouter(({ history, imgSrc, path, name, background }) => (
  <Box flex width='medium' height='300px' background={ background }>
    <Image src={ imgSrc } fit='contain' alt='{ name } example' onClick={ () => history.push(`${ path }`) } />
    <RoutedAnchor path={ path } alignSelf='center'>
      <Text>{ name }</Text>
    </RoutedAnchor>
  </Box>
));
