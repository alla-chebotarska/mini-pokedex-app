/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

interface ISearchProps {
  onSubmit: () => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

const Search: React.FC<ISearchProps> = ({
  onSubmit,
  onInputChange,
  inputValue,
}) => {
  const searchContainer = css({
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  });

  return (
    <div css={searchContainer}>
      <Input
        inputValue={inputValue}
        onInputChange={onInputChange}
        onEnter={onSubmit}
      />
      <Button onButtonClick={onSubmit} />
    </div>
  );
};

export default Search;
