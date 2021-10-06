/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { TypeBadge } from "../TypeBadge/TypeBadge";

interface ICardTypeListProps {
  types: string[];
}

export const CardTypeList: React.FC<ICardTypeListProps> = ({ types }) => {
  const cardTypeListContainer = css({
    position: "absolute",
    top: "0",
    margin: "0",
    right: "0",
    transform: "translateY(-50%)",
    display: "flex",
  });

  return (
    <div css={cardTypeListContainer}>
      {types.map((type) => (
        <TypeBadge type={type} />
      ))}
    </div>
  );
};
