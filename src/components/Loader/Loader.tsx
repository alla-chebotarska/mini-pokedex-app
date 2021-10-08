/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { DEFAULT_LIGHT, INFO } from "../../colors";

export default function Loader() {
    const loader = css`
        border: 8px solid ${DEFAULT_LIGHT};
        border-radius: 50%;
        border-top: 8px solid ${INFO};
        width:50px;
        height:50px;
        animation: spin 2s linear infinite;
      
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }`

  return <div css={loader}></div>;
}
