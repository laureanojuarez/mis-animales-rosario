import {ImagenPrueba, ItemPetStyled} from "./itempets-styled";
import {Pets} from "./arraypets";
export const ItemPets = () => {
  return (
    <>
      {Pets.map((pet) => (
        <ItemPetStyled>
          <ImagenPrueba />
          <div>
            <h2>Nombre: {pet.name}</h2>
            <p>Descripción: {pet.desc}</p>
            <p>Perdido en: {pet.lugar} </p>
            <p>Mas informacion: {pet.info} </p>
          </div>
        </ItemPetStyled>
      ))}
    </>
  );
};
