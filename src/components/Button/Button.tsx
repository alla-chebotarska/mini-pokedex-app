/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface IButtonProps {
  onButtonClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const button = css({
    padding: "12px 20px",
    margin: "8px, 0",
    backgroundColor: "#5A0349",
    border: "none",
    color: "white",
    borderRadius: "4px",
  });
  return (
    <button css={button} onClick={props.onButtonClick}>
      Go
    </button>
  );
};
