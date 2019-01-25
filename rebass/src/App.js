import React, { Component } from 'react';
import { Flex, Heading, Box, Button } from 'rebass';

class App extends Component {
  render() {
    return (
<Flex
  px={4}
  py={4}
  alignItems='center'>
  <Heading
    fontSize={[ 4, 5 ]}
    color='blue'>
    Live Demo
  </Heading>
  <Box mx='auto' />
  <Button>
    Beep
  </Button>
  <Button ml={2}>
    Boop
  </Button>
</Flex>
    );
  }
}

export default App;
