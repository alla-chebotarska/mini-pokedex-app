/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface IHeightLabelProps {
  height: number;
}

export const HeightLabel: React.FC<IHeightLabelProps> = ({ height }) => {
  const heightLabel = css({
    margin: "0",
    flex: "1 0",
  });

  const cardLabel = css({
    fontSize: "10px",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "3px",
  });

  return (
    <h4 css={heightLabel}>
      <span css={cardLabel}>Height</span>
      {height}
    </h4>
  );
};
