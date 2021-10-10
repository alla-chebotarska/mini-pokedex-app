/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef, useState } from "react";
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
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const inputContainer = css({
    position: "relative",
    width: "40%",
    display: "inline-block",
  });

  const input = css({
    width: "80%",
    padding: "12px 20px",
    margin: "8px, 0",
    border: `2px solid ${DEFAULT_LIGHT}`,
    borderRadius: "4px",
    "&:focus": {
      outline: "none",
      border: `2px solid ${DEFAULT}`,
    },
  });

  const suggestionList = css({
    position: "absolute",
    zIndex: 10,
    width: "80%",
    margin: 0,
    backgroundColor: DEFAULT_LIGHT,
  });

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      onEnter();
    }
  };

  return (
    <div css={inputContainer}>
      <input
        css={input}
        value={inputValue}
        onChange={(event) => {
          onInputChange(event.target.value);
          setShowSuggestions(true);
        }}
        placeholder="Search"
        onKeyDown={onKeyDown}
        ref={inputRef}
      ></input>
      {showSuggestions ? (
        <ul css={suggestionList}>
          {suggestions
            .filter(
              (suggestion) =>
                inputValue !== "" && suggestion.startsWith(inputValue)
            )
            .slice(0, 5)
            .map((suggestion) => (
              <li
                key={suggestion}
                onClick={(event) => {
                  onInputChange((event.target as HTMLElement).innerText);
                  setShowSuggestions(false);
                  inputRef.current?.focus();
                }}
              >
                {suggestion}
              </li>
            ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
