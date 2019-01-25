import * as React from "react";
import { Collapse, Button, Card, Elevation, Intent } from "@blueprintjs/core";

export class CollapseCard extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      open: typeof props.isOpen !== "undefined" ? props.isOpen : true
    };
  }

  onButtonClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <Card interactive={true} elevation={Elevation.TWO}>
        <Button
          fill
          large
          intent={Intent.WARNING}
          text={this.state.open ? "Collapse" : "Expand"}
          onClick={this.onButtonClick.bind(this)}
        />
        <Collapse isOpen={this.state.open}>
          <br />
          {this.props.children}
        </Collapse>
      </Card>
    );
  }
}

