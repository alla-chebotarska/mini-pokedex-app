/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface IPokemonImgProps {
  srcArray: string[];
}

const PokemonImg: React.FC<IPokemonImgProps> = ({ srcArray }) => {
  const image = css({
    maxWidth: "150px",
    maxHeight: "150px",
    textAlign: "center",
    margin: "20px",
  });

  return (
    <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
      {srcArray
        .filter((src) => src !== null)
        .map((src, idx) => (
            <img src={src} css={image} alt="pokemon" key={idx}/>
        ))}
    </Carousel>
  );
};

export default PokemonImg;
