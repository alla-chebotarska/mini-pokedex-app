import React, { useState } from "react";
import Ability from "../../models/Ability";
import BaseStat from "../../models/BaseStat";
import Pokemon from "../../models/Pokemon";
import PokemonImg from "../PokemonImg/PokemonImg";
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

export default function Card() {
  const [pokemon, setPokemon] = useState(
    new Pokemon(
      "Eevee",
      12,
      34,
      ["normal", "water" ],
      [new Ability("static", false), new Ability("lightning-rod", false)],
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
    textAlign: "left",
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

  const cardName = css({
    textAlign: "center",
    fontSize: "1.5em",
    letterLpacing: "0.02em",
    fontWeight: "bold",
  });

  const cardTypeContainer = css({
    position: "absolute",
    top: "0",
    margin: "0",
    right: "0",
    transform: "translateY(-50%)",
    display: "flex",
  });

  const cardType = css({
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

  const cardStats = css({
    margin: "1em 0",
    width: "100%",
  });

  const cardStatsData = css({
    width: "50%",
    padding: "0.25em 0.5em 0",
  });

  const cardStatsHeader = css({
    textAlign: "right",
    fontWeight: "lighter",
  });

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
    <figure css={card}>
      <div css={cardImageContainer}>
        <PokemonImg />
      </div>
      <figcaption css={cardCaption}>
        <h1 css={cardName}>{pokemon.getName()}</h1>
        <div css={cardTypeContainer}>
          {pokemon.getTypes().map((type) => (
            <h3 css={cardType}>{type}</h3>
          ))}
        </div>

        <table css={cardStats}>
          <tbody>
            {pokemon.getBaseStats().map((item) => (
              <tr css={cardStatsData}>
                <th css={cardStatsHeader}>{item.getName()}</th>
                <td css={cardStatsData}>{item.getValue()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div css={cardAbilities}>
          {pokemon.getAbilities().map((ability) => (
            <h4 css={cardAbility}>
              <span css={cardLabel}>Ability</span>
              {ability.getName()}
            </h4>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
