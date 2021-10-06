import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ICardTypeProps {
  types: string[];
}

export const CardType: React.FC<ICardTypeProps> = ({ types }) => {
  const cardTypeContainer = css({
    position: "absolute",
    top: "0",
    margin: "0",
    right: "0",
    transform: "translateY(-50%)",
    display: "flex",
  });

  const cardType = css({
    marginRight: "1em",
    color: "#ffffff",
    textTransform: "uppercase",
    letterTpacing: "0.1em",
    padding: "0.25em",
    lineHeight: "1",
    background: " #C08A53",
    fontWeight: "lighter",
    borderRadius: "2px",
  });
  return (
    <div css={cardTypeContainer}>
      {types.map((type) => (
        <h3 css={cardType}>{type}</h3>
      ))}
    </div>
  );
};
