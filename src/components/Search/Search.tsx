/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

interface ISearchProps {
  onButtonClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

const Search: React.FC<ISearchProps> = ({onButtonClick, onInputChange, inputValue}) => {

  const searchContainer = css({
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  });

  return (
    <div css={searchContainer}>
      <Input inputValue={inputValue} onInputChange={onInputChange} />
      <Button onButtonClick={onButtonClick} />
    </div>
  );
}

export default Search
