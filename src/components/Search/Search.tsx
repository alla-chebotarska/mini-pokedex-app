/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import PokemonService from "../../services/PokemonService";
import { Button } from "../Button/Button";
import Input from "../Input/Input";

export default function Search() {
  const pokemonService = new PokemonService("https://pokeapi.co/api/v2/");

  const onButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    pokemonService.getPokemon("ditto");
  };

  const searchContainer = css({
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  });

  return (
    <div css={searchContainer}>
      <Input />
      <Button onButtonClick={onButtonClick} />
    </div>
  );
}
