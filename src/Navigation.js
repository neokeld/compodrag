import React from "react";
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider
} from "@blueprintjs/core";

export const Navigation = () => (
      <Navbar className={Classes.DARK}>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Blueprint Navbar Sandbox</NavbarHeading>
          <NavbarDivider />
          <AnchorButton
            href="#"
            text="Docs"
            target="_blank"
            minimal
            rightIcon="share"
          />
          <AnchorButton
            href="#"
            text="Source"
            target="_blank"
            minimal
            rightIcon="code"
          />
        </NavbarGroup>
      </Navbar>
);

