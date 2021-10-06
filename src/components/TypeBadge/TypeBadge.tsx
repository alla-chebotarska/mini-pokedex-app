/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface ITypeBadge{
    type: string,
}

export const TypeBadge: React.FC<ITypeBadge> = ({type}) => {
    
  const TypeBadge = css({
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

  return <h3 css={TypeBadge}>{type}</h3>;
}
