/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface ITypeBadge {
  type: string;
}

export const TypeBadge: React.FC<ITypeBadge> = ({ type }) => {
  const getBadgeColor = (type: string) => {
    let badgeColor;
    switch (type) {
      case "normal":
        badgeColor = "#C08A53";
        break;
      case "water":
        badgeColor = "#1CB5E0";
        break;
      case "electric":
        badgeColor = "#e6c700";
        break;
      case "fire":
        badgeColor = "#c71800";
        break;
      case "psychic":
        badgeColor = "#ff2cc3";
        break;
      case "dark":
        badgeColor = "#5c0249";
        break;
      case "grass":
        badgeColor = "#6e7f0e";
        break;
      case "ice":
        badgeColor = "#6fb8eb";
        break;
      case "fairy":
        badgeColor = "#ff8a95";
        break;
      default:
        badgeColor = "linear-gradient(110deg, #FDBB2D 0%, #3A1C71 100%)";
    }
    return badgeColor;
  };

  const TypeBadge = css({
    marginRight: "1em",
    color: "#ffffff",
    textTransform: "uppercase",
    letterTpacing: "0.1em",
    padding: "0.25em",
    lineHeight: "1",
    background: getBadgeColor(type),
    fontWeight: "lighter",
    borderRadius: "2px",
  });

  return <h3 css={TypeBadge}>{type}</h3>;
};
