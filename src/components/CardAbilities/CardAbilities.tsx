import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Ability from "../../models/Ability";

interface ICardAbilitiesProps {
  abilities: Ability[];
}

export const CardAbilities: React.FC<ICardAbilitiesProps> = ({ abilities }) => {
  const cardAbilities = css({
    display: "flex",
    justifyContent: "space-between",
  });

  const cardAbility = css({
    marginTop: "1em",
    flex: "1 0",
  });
  const cardLabel = css({
    fontSize: "10px",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "3px",
  });
  return (
    <div css={cardAbilities}>
      {abilities.map((ability) =>
        ability.getIsHidden() ? (
          <h4 css={cardAbility}>
            <span css={cardLabel}>Hiden ability</span>
            {ability.getName()}
          </h4>
        ) : (
          <h4 css={cardAbility}>
            <span css={cardLabel}>Ability</span>
            {ability.getName()}
          </h4>
        )
      )}
    </div>
  );
};
