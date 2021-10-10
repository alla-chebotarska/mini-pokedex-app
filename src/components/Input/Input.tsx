/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef } from "react";
import { DEFAULT, DEFAULT_LIGHT } from "../../colors";

interface IInputProps {
  inputValue: string;
  suggestions: string[];
  onInputChange: (newInput: string) => void;
  onEnter: () => void;
}

const Input: React.FC<IInputProps> = ({
  inputValue,
  suggestions,
  onInputChange,
  onEnter,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const input = css({
    width: "80%",
    padding: "12px 20px",
    border: `2px solid ${DEFAULT_LIGHT}`,
    borderRadius: "4px",
    "&:focus": {
      outline: "none",
      border: `2px solid ${DEFAULT}`,
    },
  });

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      onEnter();
    }
  };

  return (
    <div>
      <input
        css={input}
        value={inputValue}
        onChange={(event) => {
          onInputChange(event.target.value);
        }}
        placeholder="Search"
        onKeyDown={onKeyDown}
        ref={inputRef}
        list="suggestions-list"
      ></input>

      <datalist id="suggestions-list">
        {suggestions
          .filter(
            (suggestion) =>
              inputValue !== "" && suggestion.startsWith(inputValue)
          )
          .slice(0, 5)
          .map((suggestion) => (
            <option
              key={suggestion}
              onClick={(event) => {
                onInputChange((event.target as HTMLElement).innerText);
                inputRef.current?.focus();
              }}
              value={suggestion}
            />
          ))}
      </datalist>
    </div>
  );
};

export default Input;
