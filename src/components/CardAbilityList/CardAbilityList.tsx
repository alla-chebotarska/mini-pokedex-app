/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Ability from "../../models/Ability";
import { AbilityItem } from "../AbilityItem/AbilityItem";

interface ICardAbilitiesProps {
  abilities: Ability[];
  isHidden: boolean;
}

export const CardAbilityList: React.FC<ICardAbilitiesProps> = ({
  abilities,
  isHidden,
}) => {
  const abilityItemTitle = css({
    marginTop: "1em",
    marginBottom: "0.5em",
    flex: "1 0",
    textAlign: "center",
  });
  const abilityItem = css({
    fontSize: "10px",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "3px",
  });

  return (
    <h4 css={abilityItemTitle}>
      <span css={abilityItem}>{isHidden ? "Hidden" : ""} Ability</span>
      {abilities
        .filter((ability) => ability.getIsHidden() === isHidden)
        .map((ability) => (
          <AbilityItem ability={ability} key={ability.getName()}/>
        ))}
    </h4>
  );
};
