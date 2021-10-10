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
      {pokemon.map((pokemon) => (
        <Card pokemon={pokemon} key={pokemon.getName()} />
      ))}
    </div>
  );
}

export default CardContainer;