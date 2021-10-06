import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NameLabel } from "../NameLabel/NameLabel";
import { HeightLabel } from "../HeightLabel/HeightLabel";
import { WeightLabel } from "../WeightLabel/WeightLabel";

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
  const cardParameters = css({
    display: "flex",
    justifyContent: "center",
    marginTop: "5px",
  });

  return (
    <div css={cardParameters}>
      <HeightLabel height={height} />
      <NameLabel name={name} />
      <WeightLabel weight={weight} />
    </div>
  );
};
