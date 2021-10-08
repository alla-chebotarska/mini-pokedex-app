import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Pokemon from "../../models/Pokemon";
import Card from "../Card/Card";

interface ICardContainerProps {
    pokemon: Pokemon[];
  }

const CardContainer: React.FC<ICardContainerProps> = ({pokemon}) =>{
  const cardContainer = css({
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  });
  return (
    <div css={cardContainer}>
      {pokemon.map((pokemon, idx) => (
        <Card pokemon={pokemon} key={idx} />
      ))}
    </div>
  );
}

export default CardContainer;