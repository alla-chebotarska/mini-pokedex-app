/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import PokemonService from "../../services/PokemonService";
import Button from "../Button/Button";
import Input from "../Input/Input";

interface ISearchProps {
  onSubmit: () => void;
  onInputChange: (newString: string) => void;
  inputValue: string;
  pokemonService: PokemonService;
}

const Search: React.FC<ISearchProps> = ({
  onSubmit,
  onInputChange,
  inputValue,
  pokemonService,
}) => {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);

  useEffect(() => {
    pokemonService.getPokemonNames().then((names) => setPokemonNames(names));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchContainer = css({
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  });

  return (
    <div css={searchContainer}>
      <Input
        inputValue={inputValue}
        suggestions={pokemonNames}
        onInputChange={onInputChange}
        onEnter={onSubmit}
      />
      <Button onButtonClick={onSubmit} />
    </div>
  );
};

export default Search;
