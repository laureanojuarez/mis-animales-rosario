import React from "react";
import {HeaderStyled, InputStyled} from "./header-styles";
import DogIcon from "../../assets/dog.png";
import Lupa from "../../assets/lupa.png";

export const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <img src={Lupa} alt="Lupa" />

        <img src={DogIcon} alt="DogIcon" />
      </div>
      <h1>¿Perdiste a un animal en Rosario?</h1>
      <p>Buscalo a traves de este buscador.</p>
      <InputStyled type="text" placeholder="Buscar..." />
    </HeaderStyled>
  );
};
