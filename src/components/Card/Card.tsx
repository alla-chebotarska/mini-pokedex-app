/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Pokemon from "../../models/Pokemon";
import { CardAbilityPanel } from "../CardAbilityPanel/CardAbilityPanel";
import { CardParameters } from "../CardParameters/CardParameters";
import { CardStatsTable } from "../CardStatsTable/CardStatsTable";
import { CardTypeList } from "../CardTypeList/CardTypeList";
import PokemonImg from "../PokemonImg/PokemonImg";

interface ICardProps {
  pokemon: Pokemon | null;
}

const Card: React.FC<ICardProps> = ({ pokemon }) => {
  const [gradient, setGradient] = useState<string>("");
  const [rotation, setRotation] = useState<number>(0);

  const getGradient = (types: string[]) => {
    let type = types[0];
    let cardBackground;
    switch (type) {
      case "normal":
        cardBackground = "linear-gradient(110deg, #FDBB2D 0%, #3A1C71 100%)";
        break;
      case "water":
        cardBackground = "linear-gradient(120deg, #1CB5E0 0%, #000851 100%)";
        break;
      case "electric":
        cardBackground =
          "linear-gradient(90deg, rgba(255,222,0,1) 34%, rgba(232,255,153,1) 83%)";
        break;
      case "fire":
        cardBackground =
          "linear-gradient(0deg, rgba(199,24,0,1) 10%, rgba(252,194,69,1) 100%)";
        break;
      case "psychic":
        cardBackground =
          "linear-gradient(140deg, rgba(255,167,249,1) 0%, rgba(255,44,195,1) 39%, rgba(255,227,167,1) 100%)";
        break;
      case "dark":
        cardBackground =
          "linear-gradient(20deg, rgba(25,25,25,1) 0%, rgba(16,11,50,1) 33%, rgba(92,2,73,1) 100%)";
        break;
      case "grass":
        cardBackground =
          "linear-gradient(140deg, rgba(196,218,61,1) 0%, rgba(110,127,14,1) 69%, rgba(39,80,9,1) 100%)";
        break;
      case "ice":
        cardBackground =
          "linear-gradient(230deg, rgba(202,234,246,1) 0%, rgba(160,234,241,1) 46%, rgba(111,184,235,1) 100%)";
        break;
      case "fairy":
        cardBackground =
          "linear-gradient(45deg, rgba(255,230,240,1) 0%, rgba(255,197,224,1) 34%, rgba(255,166,185,1) 71%, rgba(255,138,149,1) 100%)";
        break;
      default:
        cardBackground = "linear-gradient(110deg, #FDBB2D 0%, #3A1C71 100%)";
    }
    return cardBackground;
  };

  useEffect(() => {
    setGradient(pokemon == null ? "" : getGradient(pokemon.getTypes()));
    setRotation(5 - Math.floor(Math.random() * 10));
  }, [pokemon]);

  const card = css({
    display: "inline-block",
    position: "relative",
    width: "300px",
    padding: "1em",
    borderRadius: "15px",
    margin: "10px",
    background: gradient,
    boxShadow: "0px 5px 20px -10px #3A1C71",
    transform: `rotate(${rotation}deg)`,
    cursor: "pointer",
    "&:hover": {
      zIndex: 5,
      boxShadow: "0px 13px 30px -15px #000000",
      transform: "translateY(-10px)",
    },
  });

  const cardImageContainer = css({
    backgroundColor: "#2B1D19A5",
    textAlign: "center",
    padding: " 1em 0.5em",
    borderRadius: "3px 3px 0 0",
  });

  const cardCaption = css({
    backgroundColor: "#EEDABBA5",
    padding: "1em",
    position: "relative",
    borderRadius: "0 0 3px 3px",
    minHeight: "402px",
  });

  return (
    <>
      {pokemon == null ? (
        ""
      ) : (
        <figure css={card}>
          <div css={cardImageContainer}>
            <PokemonImg srcArray={pokemon.getImages()} />
          </div>
          <figcaption css={cardCaption}>
            <CardParameters
              name={pokemon.getName()}
              height={pokemon.getHeight()}
              weight={pokemon.getWeight()}
            />
            <CardTypeList types={pokemon.getTypes()} />
            <CardStatsTable baseStats={pokemon.getBaseStats()} />
            <CardAbilityPanel abilities={pokemon.getAbilities()} />
          </figcaption>
        </figure>
      )}
    </>
  );
};
export default Card;
