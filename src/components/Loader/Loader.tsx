/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { DEFAULT_LIGHT, INFO } from "../../colors";

export default function Loader() {
  const loader = css`
    border: 4px solid ${DEFAULT_LIGHT};
    border-radius: 50%;
    border-top: 4px solid ${INFO};
    width: 25px;
    height: 25px;
    animation: spin 2s linear infinite;
    margin: auto;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  return <div css={loader}></div>;
}
