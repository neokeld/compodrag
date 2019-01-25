import React from 'react';

import './App.css';

import { Navigation } from './Navigation';
import { CoreExample } from './CoreExample';
import { CardExample } from './CardExample';
import { CollapseCardExample } from './CollapseCardExample';
import { TableExample } from './TableExample';

const App = (props) => (
      <div>
	<Navigation />
	<CoreExample />
	<CardExample />
	<CollapseCardExample />
        <TableExample />
      </div>
);

export default App;

