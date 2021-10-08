/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface INameLabelProps {
  name: string;
}

export const NameLabel: React.FC<INameLabelProps> = ({ name }) => {
  const nameLabel = css({
    letterSpacing: "0.02em",
    fontWeight: "bold",
    flex: "1 0",
    margin: "0",
    textAlign: "center",
  });

  return <h3 css={nameLabel}>{name}</h3>;
};
