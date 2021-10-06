import React from "react";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function App() {
  const app = css({
    fontFamily: "Open Sans Condensed, Open Sans, Helvetica, sans-serif",
    margin: "20px",
  });

  return (
    <div css={app}>
      <Search />
      <Card />
    </div>
  );
}

export default App;
