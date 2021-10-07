/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface IButtonProps {
  onButtonClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<IButtonProps> = ({ onButtonClick }) => {
  const button = css({
    padding: "12px 20px",
    margin: "8px, 0",
    backgroundColor: "#5A0349CC",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    "&:active": {
      backgroundColor: "#5A0349FF",
    },
  });
  return (
    <button css={button} onClick={onButtonClick}>
      Go
    </button>
  );
};

export default Button;
