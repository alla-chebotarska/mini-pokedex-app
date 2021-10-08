/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface IInputProps {
  inputValue: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter: () => void;
}

const Input: React.FC<IInputProps> = ({
  inputValue,
  onInputChange,
  onEnter,
}) => {

  const input = css({
    width: "40%",
    padding: "12px 20px",
    margin: "8px, 0",
    border: "2px solid #d9d9d9",
    borderRadius: "4px",
    "&:focus": {
      outline: "none",
      border: "2px solid #b3b3b3",
    }
  });

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      onEnter();
    }
  };

  return (
    <input
      css={input}
      value={inputValue}
      onChange={onInputChange}
      placeholder="Search"
      onKeyDown={onKeyDown}
    ></input>
  );
};

export default Input;
