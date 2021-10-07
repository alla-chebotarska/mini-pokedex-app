import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface IInputProps {
  inputValue: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({ inputValue, onInputChange }) => {
  const input = css({
    width: "40%",
    padding: "12px 20px",
    margin: "8px, 0",
    border: "2px solid #F9F9F9",
    borderRadius: "4px",
  });

  return (
    <input
      css={input}
      value={inputValue}
      onChange={onInputChange}
      placeholder="Search"
    ></input>
  );
};

export default Input;