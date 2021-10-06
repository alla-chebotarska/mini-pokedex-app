/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import pokemonPng from "./133.png";

const PokemonImg = () => {
  const image = css({
    maxHeight: "150px",
    textAlign: "center",
    margin: "20px",
  });

  return (
    <div>
      <img src={pokemonPng} css={image} alt="pokemon" />
    </div>
  );
};

export default PokemonImg;
