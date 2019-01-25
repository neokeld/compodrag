import React from 'react';
import { Button, Intent, Spinner, Card } from "@blueprintjs/core";

const incrementCounter = () => console.log('i');

export const CardExample = (props) => (
<Card>
  <Button intent="success" text="Contenu du bouton" onClick={incrementCounter} />
  <Spinner intent={Intent.PRIMARY} />
</Card>
);
