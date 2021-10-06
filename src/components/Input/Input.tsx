import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Input() {
  const input = css({
    width: "40%",
    padding: "12px 20px",
    margin: "8px, 0",
    border: "2px solid #F9F9F9",
    borderRadius: "4px",
  });

  return <input css={input} placeholder="Search"></input>;
}
