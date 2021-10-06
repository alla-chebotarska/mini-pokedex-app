/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Ability from "../../models/Ability";

interface IAbilityItemProps {
  ability: Ability;
}

export const AbilityItem: React.FC<IAbilityItemProps> = ({ ability }) => {
  const abilityItem = css({
    marginBottom: "3px",
    textTransform: "capitalize",
  });
  return <div css={abilityItem}>{ability.getName()}</div>;
};
