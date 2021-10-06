/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Ability from "../../models/Ability";
import { CardAbilityList } from "../CardAbilityList/CardAbilityList";

interface ICardAbilityPanelProps {
  abilities: Ability[];
}

export const CardAbilityPanel: React.FC<ICardAbilityPanelProps> = ({
  abilities,
}) => {
  const cardAbilityPanel = css({
    display: "flex",
    justifyContent: "space-between",
  });

  return (
    <div css={cardAbilityPanel}>
      <CardAbilityList abilities={abilities} isHidden={false} />
      <CardAbilityList abilities={abilities} isHidden={true} />
    </div>
  );
};
