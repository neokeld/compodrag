import React from 'react';
import { Button, Intent, Spinner, Card } from "@blueprintjs/core";
import { Cell, Column, Table } from "@blueprintjs/table";

import './App.css';

import { CollapseCard } from './CollapseCard';
import { Navigation } from './Navigation';
import { CoreExample } from './CoreExample';

const incrementCounter = () => console.log('i');

const styles = {
  textAlign: "center"
};

const cellRenderer = (rowIndex) => <Cell>{`${rowIndex * 10}€`}</Cell>;

const App = (props) => (
      <div>
	<Navigation />
	<CoreExample />
	<Card>
          <Button intent="success" text="Contenu du bouton" onClick={incrementCounter} />
	  <Spinner intent={Intent.PRIMARY} />
	</Card>
	<CollapseCard isOpen={true}>
          <div style={styles}>
            <h1>Titre</h1>
            <h2>Cliquez sur Collapse {"\u2728"}</h2>
          </div>
        </CollapseCard>
	<Table numRows={10}>
          <Column name="Euros" cellRenderer={cellRenderer}/>
        </Table>
      </div>
);


export default App;
