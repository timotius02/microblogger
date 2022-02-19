import * as React from "react";

import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";

export class CustomNavbar extends React.PureComponent {
  render() {
    return (
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Blueprint</NavbarHeading>
          <NavbarDivider />
          <Button className={Classes.MINIMAL} icon="home" text="Home" />
          <Button className={Classes.MINIMAL} icon="document" text="Files" />
        </NavbarGroup>
      </Navbar>
    );
  }
}
