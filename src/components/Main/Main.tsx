import React, { useState } from "react";
import Ability from "../../models/Ability";
import BaseStat from "../../models/BaseStat";
import Pokemon from "../../models/Pokemon";
import PokemonService from "../../services/PokemonService";
import Card from "../Card/Card";
import Search from "../Search/Search";

export default function Main() {
  const pokemonService = new PokemonService("https://pokeapi.co/api/v2/");

  const [inputValue, setInputValue] = useState("");
  const [pokemon, setPokemon] = useState(
    new Pokemon(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
      "Eevee",
      12,
      34,
      ["normal", "water"],
      [
        new Ability("static", false),
        new Ability("lightning-rod", true),
        new Ability("static", false),
      ],
      [
        new BaseStat(55, "hp"),
        new BaseStat(55, "Attack"),
        new BaseStat(45, "Special Attack"),
        new BaseStat(65, "Special Defense"),
        new BaseStat(55, "Speed"),
      ]
    )
  );

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const onButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    pokemonService.getPokemon(inputValue).then((pokemon) => {
      setPokemon(pokemon);
      console.log(pokemon);
    });
  };

  return (
    <>
      <Search
        onButtonClick={onButtonClick}
        onInputChange={onInputChange}
        inputValue={inputValue}
      />
      <Card pokemon={pokemon} />
    </>
  );
}
