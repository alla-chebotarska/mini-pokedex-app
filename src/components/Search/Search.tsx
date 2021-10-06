import React from "react";
import Input from "../Input/Input";
import PokemonService from "../../services/PokemonService";
import { Button } from "../Button/Button";


export default function Search() {
  const pokemonService = new PokemonService("https://pokeapi.co/api/v2/");

  const onButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    pokemonService.getPokemon("ditto");
  };
  return (
    <>
      <Input />
      <Button onButtonClick={onButtonClick}/>
    </>
  );
}
