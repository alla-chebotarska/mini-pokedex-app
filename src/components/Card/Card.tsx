import React, { useState } from "react";
import Ability from "../../models/Ability";
import BaseStat from "../../models/BaseStat";
import Pokemon from "../../models/Pokemon";
import PokemonImg from "../PokemonImg/PokemonImg";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CardStats } from "../CardStats/CardStats";
import { CardAbilities } from "../CardAbilities/CardAbilities";
import { CardParameters } from "../CardParameters/CardParameters";
import { CardType } from "../CardType/CardType";

export default function Card() {
  const [pokemon, setPokemon] = useState(
    new Pokemon(
      "Eevee",
      12,
      34,
      ["normal", "water"],
      [new Ability("static", false), new Ability("lightning-rod", true)],
      [
        new BaseStat(55, "hp"),
        new BaseStat(55, "Attack"),
        new BaseStat(45, "Special Attack"),
        new BaseStat(65, "Special Defense"),
        new BaseStat(55, "Speed"),
      ]
    )
  );

  const card = css({
    display: "inline-block",
    position: "relative",
    width: "300px",
    padding: "1em",
    borderRadius: "15px",
    margin: "10px",
    background: "linear-gradient(110deg, #FDBB2D 0%, #3A1C71 100%)",
    boxShadow: "0px 5px 20px -10px #3A1C71",
  });

  const cardImageContainer = css({
    backgroundColor: "#2B1D19A5",
    textAlign: "center",
    padding: " 1em 1em 0",
    borderRadius: "3px 3px 0 0",
  });

  const cardCaption = css({
    backgroundColor: "#EEDABB",
    padding: "1em",
    position: "relative",
    borderRadius: "0 0 3px 3px",
  });

  return (
    <figure css={card}>
      <div css={cardImageContainer}>
        <PokemonImg />
      </div>
      <figcaption css={cardCaption}>
        <CardParameters
          name={pokemon.getName()}
          height={pokemon.getHeight()}
          weight={pokemon.getWeight()}
        />
        <CardType types={pokemon.getTypes()} />
        <CardStats baseStats={pokemon.getBaseStats()} />
        <CardAbilities abilities={pokemon.getAbilities()} />
      </figcaption>
    </figure>
  );
}
