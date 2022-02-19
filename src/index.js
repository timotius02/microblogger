import React from "react";
import ReactDOM from "react-dom";

import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";

import { Toolbar } from "polotno/toolbar/toolbar";
import { Workspace } from "polotno/canvas/workspace";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel } from "polotno/side-panel";
import { createStore } from "polotno/model/store";

import { CustomNavbar } from "./Navbar";
import { Preview } from "./preview";

const store = createStore({
  // this is a demo key just for that project
  // (!) please don't use it in your projects
  // to create your own API key please go here: https://polotno.dev/cabinet
  key: "nFA5H9elEytDyPyvKL7T",
  // you can hide back-link on a paid licence
  // but it will be good if you can keep it for Polotno project support
  showCredit: true,
});

// make global for debug
window.store = store;
store.addPage();
store.activePage.addElement({
  type: "text",
  text: "Create Microblog Post",
  x: 50,
  y: 100,
  fontSize: 30,
  width: 200,
  align: "center",
  fontFamily: "Amatic SC",
});

const App = ({ store }) => {
  return (
    <Container>
      <CustomNavbar />
      <PolotnoContainer
        className="polotno-app-container"
        style={{ flex: "1 1 auto" }}
      >
        <SidePanelWrap>
          <SidePanel store={store} />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Toolbar store={store} downloadButtonEnabled />
          <Workspace store={store} />
          <ZoomButtons store={store} />
          <Preview store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>
    </Container>
  );
};

const Container = ({ children }) => {
  return (
    <div style={{ display: "flex", flexFlow: "column", height: "100vh" }}>
      {children}
    </div>
  );
};

ReactDOM.render(<App store={store} />, document.getElementById("root"));
