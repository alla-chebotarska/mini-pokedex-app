/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface IWeightBadgeProps {
  weight: number;
}

export const WeightLabel: React.FC<IWeightBadgeProps> = ({ weight }) => {
  const weightLabel = css({
    margin: "0",
    flex: "1 0",
    textAlign: "right",
  });

  const cardLabel = css({
    fontSize: "10px",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "3px",
    
  });

  return (
    <h4 css={weightLabel}>
      <span css={cardLabel}>Weight</span>
      {weight}
    </h4>
  );
};