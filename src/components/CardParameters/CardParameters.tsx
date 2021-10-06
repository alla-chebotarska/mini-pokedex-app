import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ICardParametersProps {
  name: string;
  height: number;
  weight: number;
}

export const CardParameters: React.FC<ICardParametersProps> = ({
  name,
  height,
  weight,
}) => {
  const cardName = css({
    letterSpacing: "0.02em",
    fontWeight: "bold",
    flex: "1 0",
    margin: "0",
    textAlign: "center",
  });

  const cardParameters = css({
    display: "flex",
    justifyContent: "center",
    marginTop: "5px",
  });

  const cardHeight = css({
    margin: "0",
    flex: "1 0",
  });

  const cardLabel = css({
    fontSize: "10px",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "3px",
  });

  const cardWeight = css({
    margin: "0",
    flex: "1 0",
    textAlign: "right",
  })
  return (
    <div css={cardParameters}>
      <h4 css={cardHeight}>
        <span css={cardLabel}>Height</span>
        {height}
      </h4>
      <h2 css={cardName}>{name}</h2>
      <h4 css={cardWeight}>
        <span css={cardLabel}>Weight</span>
        {weight}
      </h4>
    </div>
  );
};
