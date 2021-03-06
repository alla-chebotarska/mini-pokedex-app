/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { PRIMARY_LIGHT, PRIMARY_MAIN, WHITE } from "../../colors";

interface IButtonProps {
  onButtonClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<IButtonProps> = ({ onButtonClick }) => {
  const button = css({
    padding: "12px 20px",
    margin: "8px, 0",
    backgroundColor: PRIMARY_LIGHT,
    color: WHITE,
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    "&:active": {
      backgroundColor: PRIMARY_MAIN,
    },
  });
  return (
    <button css={button} onClick={onButtonClick}>
      Go
    </button>
  );
};

export default Button;
