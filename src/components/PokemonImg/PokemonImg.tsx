/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface IPokemonImgProps{
  src: string;
}

const PokemonImg: React.FC<IPokemonImgProps> = ({src}) => {
  const image = css({
    maxHeight: "150px",
    textAlign: "center",
    margin: "20px",
  });

  return (
    <div>
      <img src={src} css={image} alt="pokemon" />
    </div>
  );
};

export default PokemonImg;

