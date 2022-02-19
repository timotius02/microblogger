import React from "react";
import { Navbar, Button } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

export const Preview = observer(({ store }) => {
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const [content, setContent] = React.useState("");

  const updateContent = async () => {
    setContent(await store.toDataURL({ ignoreBackground: true }));
  };

  React.useEffect(() => {
    // when loading for all fonts
    store.waitLoading().then(updateContent);
    store.on("change", updateContent);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        zIndex: 10,
        background: "white",
        border: "1px solid rgba(16, 22, 26, 0.2)",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <Navbar>
        <Navbar.Group align="right">
          {previewVisible && (
            <Button
              icon="eye-off"
              minimal
              onClick={() => {
                setPreviewVisible(false);
              }}
            >
              Hide preview
            </Button>
          )}
          {!previewVisible && (
            <Button
              icon="eye-on"
              minimal
              onClick={() => {
                setPreviewVisible(true);
              }}
            >
              Instagram Preview
            </Button>
          )}
        </Navbar.Group>
      </Navbar>
      <div
        className="preview-container"
        style={{ display: previewVisible ? "" : "none", position: "relative" }}
      >
        <img src="./book-cover.jpeg" style={{ width: "300px" }} />
        <img
          src={content}
          alt="Instagram Preview"
          style={{
            position: "absolute",
            top: "35px",
            left: "80px",
            width: "150px",
            border: "1px solid lightgrey",
          }}
        />
      </div>
    </div>
  );
});
