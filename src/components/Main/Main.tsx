/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import Pokemon from "../../models/Pokemon";
import PokemonService from "../../services/PokemonService";
import CardContainer from "../CardContainer/CardContainer";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Search from "../Search/Search";

export default function Main() {
  const pokemonService = new PokemonService("https://pokeapi.co/api/v2/");
  const randomNumber = function (max: number): number {
    return Math.floor(Math.random() * max);
  };

  const [inputValue, setInputValue] = useState("");
  const [invalidPokemonNameMessage, setInvalidPokemonNameMessage] =
    useState("");
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    for (let i = 0; i < 4; ++i) {
      pokemonService.getPokemonById(randomNumber(898)).then((randomPokemon) => {
        let tmp = pokemon;
        tmp.push(randomPokemon);
        setPokemon([...tmp]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onInputChange = (newString: string): void => {
    setInputValue(newString);
  };

  const onButtonClick = () => {
    if (inputValue === "") {
      return;
    }
    pokemonService
      .getPokemonByName(inputValue.toLowerCase())
      .then((pokemon) => {
        setPokemon([pokemon]);
        setInputValue("");
        setInvalidPokemonNameMessage("");
      })
      .catch((error) => {
        setInvalidPokemonNameMessage("Error");
      });
  };

  return (
    <>
      <Search
        onSubmit={onButtonClick}
        onInputChange={onInputChange}
        inputValue={inputValue}
        pokemonService={pokemonService}
      />
      {invalidPokemonNameMessage ? (
        <ErrorMessage message="To see pokemon card please input valid pokemon name" />
      ) : (
        <CardContainer pokemon={pokemon} />
      )}
    </>
  );
}
