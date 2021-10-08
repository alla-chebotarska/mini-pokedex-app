/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Main from "./components/Main/Main";

function App() {
  const app = css({
    fontFamily: "Open Sans Condensed, Open Sans, Helvetica, sans-serif",
    padding: "20px",
    backgroundColor: " #f9f9f9",
  });

  return (
    <div css={app}>
      <Main />
    </div>
  );
}

export default App;
