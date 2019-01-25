import * as React from "react";
import { Button, Intent, Slider, Card } from "@blueprintjs/core";

import './CoreExample.css';

export class CoreExample extends React.PureComponent<{}, CoreExampleState> {
  state = {
    sliderValue: 6
  };

  render() {
    return (
      <Card className="example-card">
	<div className="example-header">Blueprint Core Sandbox</div>
        <h3>Boutons :</h3>
        <Button intent={Intent.PRIMARY} text="Primary" />
        <Button intent={Intent.WARNING} text="Warn" />
        <Button intent={Intent.DANGER} text="Danger" />
        <h3>Déplacez le curseur :</h3>
        <Slider
          min={0}
          max={11}
          onChange={this.setSliderValue}
          value={this.state.sliderValue}
        />
      </Card>
    );
  }

  setSliderValue = (value: number) => {
    this.setState({
      sliderValue: value
    });
  };
}

