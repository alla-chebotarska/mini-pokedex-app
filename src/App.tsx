import React from "react";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

function App() {

const app = css({
  fontFamily: ["Open Sans Condensed", "Open Sans", "Helvetica", "sans-serif"],
  textAlign: "center",
  margin: "20px",
})

  return (
    <div css={app}>
      <Search />
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
